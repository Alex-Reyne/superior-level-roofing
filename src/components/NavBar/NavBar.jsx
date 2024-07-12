import Image from 'next/image.js'
import logo from '../../../public/superior-level-roofing-logo.png'
import { Container, Links, BurgerMenu } from './styles.jsx'
import Link from 'next/link'
import useIsMobile from '../../app/Hooks/useIsMobile'
import { useState } from 'react'

export default function NavBar({ headers }) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const handleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const NavItems = () => {
    return (
      <Links isOpen={isOpen}>
        {Object.entries(headers).map(([k, v], idx) => {
          return (
            <Link
              key={idx}
              href={`#${k}`}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              {v}
            </Link>
          )
        })}
      </Links>
    )
  }

  return (
    <Container>
      <Image
        alt="superior level roofing logo"
        src={logo}
      />
      {isMobile && (
        <BurgerMenu
          onClick={() => {
            handleOpen()
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </BurgerMenu>
      )}
      {NavItems()}
    </Container>
  )
}
