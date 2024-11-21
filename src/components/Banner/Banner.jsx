
import bannerimg from '../../assets/images/user.png'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex'>

        <div className='w-2/3 text-center space-y-8 mt-8'>
    {/* text part here */}

        <p className='text-7xl font-extrabold'>One Step Closer To Your Dream Job</p>

        <p className='text-3xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

        <button>Get Started</button>
        </div>
    <div >
        <img src={bannerimg} alt="" />
    </div>

    </div>
  )
}

export default Banner