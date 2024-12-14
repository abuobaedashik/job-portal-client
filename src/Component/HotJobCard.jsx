/* eslint-disable react/prop-types */
import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";

const HotJobCard = ({ everyJob }) => {
  console.log(everyJob);

  //   data  of jobs
  // {
  //     "title": "Software Engineer",
  //     "location": "Halishohor, Chittagong",
  //     "jobType": "Hybrid",
  //     "category": "Engineering",
  //     "applicationDeadline": "2024-12-31",
  //     "salaryRange": {
  //       "min": 40000,
  //       "max": 60000,
  //       "currency": "bdt"
  //     },
  //     "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
  //     "company": "Favorite IT",
  //     "requirements": ["JavaScript", "React", "Node.js", "MongoDB"],
  //     "responsibilities": ["Develop and maintain software", "Collaborate with the team", "Participate in code reviews"],
  //     "status": "active",
  //     "hr_email": "hr@techsolutions.com",
  //     "hr_name": "Farhan Rahman",
  //     "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
  //   },

  const {
    _id,
    title,
    location,
    jobType,
    description,
    applicationDeadline,
    salaryRange,
    company,
    requirements,
    company_logo,
  } = everyJob;
  return (
    <div className="card bg-[#BFECFF]  shadow-xl p-4">
      <div className="flex items-center gap-2 pt-3">
        <figure>
          <img src={company_logo} alt={company} />
        </figure>
        <div className="flex items-start flex-col">
          <div className="text-lg font-bold">{company}</div>
          <div className="text-sm font-medium">{location}</div>
        </div>
      </div>
      <div className="px-2 mt-2">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-2 items-center text-sm opacity-50">
           <p className="flex gap-1 items-center justify-between"> <MdOutlineLocalPostOffice/> {jobType}</p>
           <p className="flex gap-1 items-center justify-between"><FaBusinessTime></FaBusinessTime> {applicationDeadline}</p>
        </div>
        <p>{description.slice(0,200)}</p>
        <div className="mt-3 flex items-center gap-2 flex-wrap-reverse">
            {
            requirements.map(skill => <div key={skill._id} className='flex items-center'><p className="px-2 py-1 rounded-md text-center  bg-[#EFF3FC]">{skill}</p></div>)
            }
        </div>
        <div className=" flex items-center justify-between mt-5">
          <div className="px-3 py-1 rounded-md text-blue-500"> ${salaryRange.min}-{salaryRange.max} <span className="text-lg font-bold text-[#13131364]">{salaryRange.currency}</span></div>
          <Link to={`/jobDetails/${_id}`} className="px-3 py-1 rounded-md text-blue-300 hover:bg-blue-400 hover:text-[#ffffff] bg-[#EFF3FC]">Apply Naow</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
