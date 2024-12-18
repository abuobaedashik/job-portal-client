import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applycation = useLoaderData();
  console.log(applycation);
  const handleReview = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:3000/job_application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Application Status Updated",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div>
      veiw my job application {applycation?.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Linkedin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applycation.map((applyinfo, index) => (
              <tr key={applyinfo._id}>
                <th>{index + 1}</th>
                <td>{applyinfo.user_email}</td>
                <td>{applyinfo.linkedin}</td>
                <td>
                  <select
                    onChange={(e) => handleReview(e, applyinfo._id)}
                    defaultValue={applycation.status || "set Review"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option>set review</option>
                    <option>Short Listed</option>
                    <option>Hired</option>
                    <option>Call Interview</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
