
import { MdOutlineManageAccounts } from "react-icons/md";

import React from 'react'

const JobCatagory = () => {
  return (
    <div className="flex mt-10  m-auto justify-center">
      <p className="text-6xl"> Job Category List</p>
    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

{/* starting of card here */}

<div className="bg-[#7e8ffe5e] w-[311px] h-[243px] m-4">
  <div className="text-6xl bg-[#7e8ffe5e] p-4 "><MdOutlineManageAccounts /></div>
<div className="p-4">
<p>Account & Finance</p>
<p>300 jobs Available</p>

</div>
</div>

{/* starting of second on */}


<div className="bg-[#7e8ffe5e] w-[311px] h-[243px] m-4">
  <div className="text-6xl bg-[#7e8ffe5e] p-4 "><MdOutlineManageAccounts /></div>
<div className="p-4">
<p>Account & Finance</p>
<p>300 jobs Available</p>

</div>
</div>

{/* third one */}

<div className="bg-[#7e8ffe5e] w-[311px] h-[243px] m-4">
  <div className="text-6xl bg-[#7e8ffe5e] p-4 "><MdOutlineManageAccounts /></div>
<div className="p-4">
<p>Account & Finance</p>
<p>300 jobs Available</p>

</div>
</div>




    </div>
  )
}

export default JobCatagory