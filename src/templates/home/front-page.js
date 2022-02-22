import React from 'react'

import HomeCover from './home-cover'
import HomeContact from './home-contact'
import HomeProjects from './home-projects'
import HomeAplication from './home-aplication'
import HomeOffer from './home-offer'
import HomeNews from './home-news'
import Calendar from '../../components/calendar'

import useSlides from '../../hooks/useSlides'

const FrontPage = ({ page }) => {

  // Load the post, but only if the data is ready.
  return (
    <>
      <HomeCover />
      <HomeOffer />
      <Calendar />
      <HomeNews />
      <HomeProjects />
      <HomeAplication />
      <HomeContact />
    </>
  )
}

export default FrontPage
