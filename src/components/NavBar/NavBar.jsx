import Image from 'next/image.js'
import logo from '../../../public/superior-level-roofing-logo.png'
import { Container, Links, BurgerMenu } from './styles.jsx'
import Link from 'next/link'
import useIsMobile from '../../app/Hooks/useIsMobile'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const handleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <Container>
      <Image src={logo} />
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
      <Links isOpen={isOpen}>
        <Link
          href="#home"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Home
        </Link>
        <Link
          href="#services"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Services
        </Link>
        <Link
          href="#about"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          About
        </Link>
        <Link
          href="#contact"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Contact
        </Link>
      </Links>
    </Container>
  )
}
