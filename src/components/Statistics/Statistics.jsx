import React from "react";

const Statistics = () => {
  return (
    <div>
      <div>
        <p className="text-4xl text-center">Job Details</p>
      </div>

      {/* starting of 2 part os descriptions here */}

      <div className="flex justify-center">

        <div className="w-[50%] mt-8">
          <p>
            {" "}
            <span>Job Description:</span> A UI/UX (User Interface/User
            Experience) designer is responsible for designing and creating
            engaging and effective interfaces for software and web applications.
            This includes designing the layout, visual design, and interactivity
            of the user interface.
          </p>

          <p>
            Job Responsibility: Collaborating with cross-functional teams: UI/UX
            designers often work closely with other teams, including product
            management, engineering, and marketing, to ensure that the user
            interface is aligned with business and technical requirements. You
            will need to be able to effectively communicate your design ideas
            and gather feedback from other team members.
          </p>

          <p>Educational Requirements:</p>

          <p>Bachelor degree to complete any reputational university.</p>

          <p>Experiences</p>

          <p>2-3 Years in this field.</p>
        </div>


        <div className="mt-8">
          <div>
            <h3>Job Details</h3>
            <hr />

            <p>Salary : 100K - 150K (Per Month)</p>
            <p>Job Title : Product Designer</p>
            <p>Contact Information</p>

            <hr />

            <p>Phone : 01750-00 00 00</p>
            <p>Email : info@gmail.com</p>
            <p>Address : Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
          </div>

          <button className="btn">Apply Now</button>
        </div>
      </div>


    </div>
  );
};

export default Statistics;
