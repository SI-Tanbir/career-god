
import React from 'react'
import Banner from './Banner/Banner'
import JobCatagory from '../JobCatagory/JobCatagory'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs'

const Home = () => {
  return (
    <div>
      
    <Banner></Banner>

    <JobCatagory></JobCatagory>

    <FeaturedJobs></FeaturedJobs>

    </div>

  )
}

export default Home