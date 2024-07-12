import styled from 'styled-components'

const GalleryContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  margin-inline: auto;

  margin: 5rem;

  @media screen and (min-width: 768px) {
    margin: calc(5rem + 50px);
    img {
      width: 200px;
      height: 200px;
      transition:
        scale 350ms ease,
        opacity 350ms linear,
        filter 350ms linear;

      &:hover {
        scale: 2;
        z-index: 2;
      }
    }

    &:has(img:hover) img:not(:hover) {
      scale: 0.95;
      opacity: 0.7;
      filter: grayscale(80%);
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);

    img {
      width: 150px;
      height: 150px;
    }
  }
`

export { GalleryContainer }
