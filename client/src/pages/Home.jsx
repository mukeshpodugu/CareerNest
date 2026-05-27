import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import DeveloperSection from '../components/DeveloperSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
      <AppDownload/>
      <DeveloperSection/>
      <Footer/>
    </div>
  )
}

export default Home
