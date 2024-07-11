// src/Carousel.js
import React, { useState } from 'react'
import {
  CarouselContainer,
  CarouselButton,
  CarouselImg,
  CarouselCopy,
  Modal,
} from './Styles.jsx'
import { ExpandButton } from './Styles.jsx'

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    )
  }
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }

  const expand = () => {
    return expanded ? setExpanded(false) : setExpanded(true)
  }

  return (
    <>
      <CarouselContainer>
        <CarouselButton onClick={prevSlide}>&lt;</CarouselButton>
        <CarouselImg
          src={data[activeIndex].image}
          alt={`Services Slide ${activeIndex} - ${data[activeIndex].copy}`}
        />
        <CarouselButton onClick={nextSlide}>&gt;</CarouselButton>
        <h2>{data[activeIndex].title}</h2>
        <CarouselCopy>{data[activeIndex].copy[0]}</CarouselCopy>
        <ExpandButton onClick={expand}> Learn More</ExpandButton>
      </CarouselContainer>
      {expanded ? (
        <Modal>
          <h2>{data[activeIndex].title}</h2>
          <p>{data[activeIndex].copy[0]}</p>
          <br />
          <p>{data[activeIndex].copy[1]}</p>
          <ExpandButton
            onClick={expand}
            expanded={true}
          >
            Back
          </ExpandButton>
        </Modal>
      ) : null}
    </>
  )
}
export default Carousel
