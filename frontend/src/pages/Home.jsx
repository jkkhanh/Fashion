import React from 'react'
import Hero from '../components/Hero'
import FsCollection from '../components/FsCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {

  return (
    <div>
      <Hero />
      <FsCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home