'use client'

import { Main } from './styles.jsx'
import { heroText, headers, infoSelectorData, images } from './Constants.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import Banner from '../components/Banner/Banner.jsx'
import ContentHeader from '../components/ContentHeader/ContentHeader.jsx'
import InfoSelector from '../components/InfoSelector/InfoSelector.jsx'
import ImageGallery from '../components/ImageGallery/ImageGallery.jsx'

export default function Home() {
  return (
    <Main>
      <NavBar headers={headers} />
      <Banner header={heroText} />
      <ContentHeader
        id={'services'}
        header={headers.services}
      />
      <InfoSelector infoSelectorData={infoSelectorData} />
      <ContentHeader
        id={'gallery'}
        header={headers.gallery}
      />
      <ImageGallery images={images.gallery} />
      <ContentHeader
        id={'about'}
        header={headers.about}
      />
      <ContentHeader
        id={'contact'}
        header={headers.contact}
      />
    </Main>
  )
}
