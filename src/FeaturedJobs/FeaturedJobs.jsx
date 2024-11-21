import React from 'react'
import google from "../assets/logo/google.png"
import airbnb from "../assets/logo/airbnb.png"
import netflix from "../assets/logo/netflix.png"
import tesla from "../assets/logo/tesla.png"

const FeaturedJobs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <p className="text-4xl font-semibold">Featured Jobs</p>
        <p>Explore thousands of job opportunities with all the information you need. It's your future.</p>
      </div>

      {/* Featured Job Card */}

<div className=' grid grid-cols-2 gap-10'>




<div className="border p-4 shadow-lg rounded-lg mt-4 w-[640px] ">
        <img src={tesla} alt="Google Logo" />
       
        <h2 className="text-xl font-semibold text-center mt-4">Software Engineer</h2>
        <p className="text-center text-gray-600 mt-2">Join Google as a Software Engineer and work on innovative projects with a global impact.</p>
        <a href="#" className="block text-center text-blue-500 mt-4">Apply Now</a>
      </div>


      <div className="border p-4 shadow-lg rounded-lg mt-4 w-[640px] ">
        <img src={netflix} alt="Google Logo" />
     
        <h2 className="text-xl font-semibold text-center mt-4">Software Engineer</h2>
        <p className="text-center text-gray-600 mt-2">Join Google as a Software Engineer and work on innovative projects with a global impact.</p>
        <a href="#" className="block text-center text-blue-500 mt-4">Apply Now</a>
      </div>

      <div className="border p-4 shadow-lg rounded-lg mt-4 w-[640px] ">
        <img src={google} alt="Google Logo" />
   
        <h2 className="text-xl font-semibold text-center mt-4">Software Engineer</h2>
        <p className="text-center text-gray-600 mt-2">Join Google as a Software Engineer and work on innovative projects with a global impact.</p>
        <a href="#" className="block text-center text-blue-500 mt-4">Apply Now</a>
      </div>
      

      <div className="border p-4 shadow-lg rounded-lg mt-4 w-[640px] ">
        <img src={airbnb} alt="Google Logo" />
      
        <h2 className="text-xl font-semibold text-center mt-4">Software Engineer</h2>
        <p className="text-center text-gray-600 mt-2">Join Google as a Software Engineer and work on innovative projects with a global impact.</p>
        <a href="#" className="block text-center text-blue-500 mt-4">Apply Now</a>
      </div>




</div>
 

    </div>
  )
}

export default FeaturedJobs
