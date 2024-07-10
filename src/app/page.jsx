'use client'

import Banner from '@/components/Banner/Banner.jsx'
import { Main, Content } from './styles.jsx'
import NavBar from '@/components/NavBar/NavBar.jsx'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
import { heroText, headers, infoSelectorData } from './Constants.jsx'
import InfoSelector from '@/components/InfoSelector/InfoSelector.jsx'

export default function Home() {
  return (
    <Main>
      <NavBar />
      <Banner header={heroText} />
      <ContentHeader header={headers.services} />
      <InfoSelector infoSelectorData={infoSelectorData} />
      <ContentHeader header={headers.about} />
      <ContentHeader header={headers.contact} />
    </Main>
  )
}
