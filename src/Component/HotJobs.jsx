import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [job,setjob] =useState([])
    console.log(job);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setjob(data)
        })
    },[])
    return (
        <div>
           <div className="mt-7 text-xl text-center font-bold">Jobs of the day</div>
           <div className="mt-2 text-base text-center font-bold">Search and connect with the right candidates faster.</div>
           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {
                job.map(everyJob =><HotJobCard key={everyJob._id} everyJob={everyJob}></HotJobCard>)
                }
           </div>

        </div>
    );
};

export default HotJobs;