import { useEffect, useState } from 'react'
import useIsMobile from '../../app/Hooks/useIsMobile'
import {
  Container,
  SelectImage,
  SelectedImage,
  ImageContainer,
  TextContainer,
  Paragraph,
  MobileContainer,
} from '../InfoSelector/styles'
import Carousel from '../Carousel/Carousel'

export default function InfoSelector({ infoSelectorData }) {
  const [copyView, setCopyview] = useState('small')
  const [delayHandler, setDelayHandler] = useState(null)
  const [selectedImage, setSelectedImage] = useState(infoSelectorData[0].image)
  const [selectedCopy, setSelectedCopy] = useState(infoSelectorData[0].copy)

  const isMobile = useIsMobile()

  const handleMouseEnter = () => {
    if (delayHandler) clearTimeout(delayHandler)
    setDelayHandler(setCopyview('expanded'))
  }

  const handleMouseLeave = () => {
    if (delayHandler) clearTimeout(delayHandler)
    setDelayHandler(
      setTimeout(() => {
        setCopyview('small')
      }, 1000)
    )
  }

  const checkSelected = (image) => {
    return image === selectedImage
  }

  return (
    <Container>
      {isMobile ? (
        <Carousel data={infoSelectorData} />
      ) : (
        <>
          <SelectImage>
            {infoSelectorData.map((item, idx) => {
              const { title, image, copy } = item
              return (
                <ImageContainer
                  key={idx}
                  border={checkSelected(image)}
                >
                  <img
                    src={image}
                    onClick={() => {
                      setSelectedImage(image)
                      setSelectedCopy(copy)
                      setCopyview('small')
                    }}
                  />
                  <h3>{title}</h3>
                </ImageContainer>
              )
            })}
          </SelectImage>
          <SelectedImage>
            <TextContainer
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              expanded={copyView}
            >
              {selectedCopy.map((copy, idx) => {
                return (
                  <>
                    <Paragraph
                      key={idx}
                      copyView={copyView}
                      idx={idx}
                    >
                      {copy}
                    </Paragraph>
                    {idx === 0 ? <br /> : null}
                  </>
                )
              })}
            </TextContainer>
            <img src={selectedImage} />
          </SelectedImage>
        </>
      )}
    </Container>
  )
}
