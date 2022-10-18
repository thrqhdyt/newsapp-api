import React from 'react'
import BusinessNews from '../components/BusinessNews'
import SportNews from '../components/SportNews'
import TopNews from '../components/TopNews'

function Home() {
  return (
    <div>
      <TopNews />
      <SportNews />
      <BusinessNews />
    </div>
  )
}

export default Home