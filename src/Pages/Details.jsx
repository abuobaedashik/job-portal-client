import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const job =useLoaderData()
    console.log(job);
    const {
        _id,
        title,
        location,
        jobType,
        description,
        category,
        applicationDeadline,
        salaryRange,
        company,
        requirements,
        company_logo,
      } = job;
    return (
        <div>
           <div className="mt-6">
              <img src={company_logo} className='h-[200px] w-[200px]' alt="" />
              <p className='text-2xl font-bold'>{title}</p>
           </div>
             
            <br />
            {job.length}
        </div>
    );
};

export default Details;