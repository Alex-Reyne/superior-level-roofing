'use client'

import Banner from '../components/Banner/Banner.jsx'
import { Main } from './styles.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import ContentHeader from '../components/ContentHeader/ContentHeader.jsx'
import { heroText, headers, infoSelectorData } from './Constants.jsx'
import InfoSelector from '../components/InfoSelector/InfoSelector.jsx'

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
