import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [postedJob, setpostedJob] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setpostedJob(data);
      });
  }, [user?.email]);
  return (
    <div>
      jobs:{postedJob.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>DeadLine</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
             {
              postedJob.map((job,index)=><tr key={job._id}>
                <th>{index+1}</th>
                <td>{job?.title}</td>
                <td>{job?.applicationDeadline}</td>
                <td>
                    <Link to={`/viewApplication/${job._id}`} className="btn-link">View Apply</Link>
                </td>
              </tr>)
             }
         
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
