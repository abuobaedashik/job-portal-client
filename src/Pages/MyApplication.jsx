import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { data } from "react-router-dom";
import axios from "axios";

const MyApplication = () => {
  const { user } = useAuth();
  console.log(user.email);
  const [application, setapplication] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:3000/job_application?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setapplication(data);
    //     console.log(data);
    //   });
   axios.get('http://localhost:3000/job_application?email=${user?.email}',{withCredentials:true})
   .then(res=>setapplication(res.data))

  }, [user.email]);
  return (
    <div>
      application{application.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Application Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            application.map(apply =>  <tr key={apply._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={apply?.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{apply?.company}</div>
                      <div className="text-sm opacity-50">{apply?.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {apply.jobType}, {apply.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {apply?.title}
                  </span>
                </td>
                <td>{apply?.applicationDeadline}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
           }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
