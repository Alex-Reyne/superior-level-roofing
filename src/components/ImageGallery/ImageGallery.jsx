import { GalleryContainer } from './styles.jsx'

export default function ImageGallery({ images }) {
  return (
    <GalleryContainer>
      {images.map((img, idx) => {
        return (
          <img
            key={idx}
            src={img}
            alt={`gallery-${img}`}
          />
        )
      })}
    </GalleryContainer>
  )
}
