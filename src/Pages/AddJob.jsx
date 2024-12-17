
import React from "react";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const AddJob = () => {
    const {user}=useAuth()
    const handleSubmit = e=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const jobData =Object.fromEntries(formData.entries())
        console.log(jobData);
        const {min,max,currency, ...newJob} = jobData;
        console.log(newJob);
        newJob.salaryRange ={min,max,currency}
        newJob.requirements=newJob.requirements.split('\n')
        newJob.responsibilities
        =newJob.responsibilities.split('\n')
        console.log(newJob);

        fetch('http://localhost:3000/jobs',{
             method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
      body: JSON.stringify(newJob),
        })
        .then(res=>res.json())
        .then(data=>{
             if (data.insertedId) {
                      Swal.fire({
                        title: "Job Added Successful",
                        icon: "success",
                        draggable: true
                      })
                    }
        })
    }
  return (
    <div>
      <div>
        <div>
          <div className="py-6 ">
            <form onSubmit={handleSubmit} className="p-5 ">
              <div className="flex items-center flex-col mx-auto px-6 py-3 w-8/12 border border-blue-500 rounded-xl  bg-[#F4F3F0] ">
                <div className="text-xl font-semibold mt-3 mb-5">Add a Job</div>
                {/* title and location*/}
                <div className=" grid  grid-cols-1 items-center gap-4 w-full">
                  <div className="flex  flex-col gap-1 ">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Job Title
                    </span>
                    <input
                      type="text"
                      placeholder="Enter Job title"
                      name="title"
                      className="  input-accent px-5 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Location
                    </span>
                    <div className="w-full">
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter Company Location "
                        className="w-full input-accent px-5 py-1 rounded-md "
                      />
                    </div>
                  </div>
                </div>
                {/* jobType and category*/}
                <div className=" grid grid-cols-1 items-center gap-4 w-full">
                  {/* jobType */}
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Choose A JobType
                    </span>
                    <select
                      name="jobType"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    >
                      <option disabled >
                        Chose a Job Field
                      </option>
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Intern</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                      <option>Contractual</option>
                    </select>
                  </div>

                  {/* category */}
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Choose A Category
                    </span>
                    <select
                      name="category"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    >
                      <option disabled >
                        Chose a Job Field
                      </option>
                      <option>Development</option>
                      <option>Marketing</option>
                      <option>Design</option>
                      <option>Engineering</option>
                      <option>Finance</option>
                      <option>Data Science</option>
                      <option>Management</option>
                      <option>UI-UX </option>
                      <option>Motion Graphics</option>
                    </select>
                  </div>
                </div>
                {/* application dedline */}
                <div className=" grid  grid-cols-1 items-center gap-4 w-full">
                
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                   Applications Last Data
                  </span>
                  <div className="w-full">
                    <input
                      type="date"
                      name="applicationDeadline"
                      
                      className="w-full input-accent px-5 py-1 rounded-md "
                    />
                  </div>
                </div>
              </div>
                {/* salary range min,max,currency*/}
                <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-4 w-full">
                  {/* min */}
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Salary Range min
                    </span>
                    <input
                      type="text"
                      name="min"
                      placeholder="minimum Range"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    />
                  </div>
                  {/* max */}
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Salary Range max
                    </span>
                    <input
                      type="text"
                      name="max"
                      placeholder="maximum Range"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    />
                  </div>

                  {/* currency */}
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Salery Currency
                    </span>
                    <select
                      name="currency"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    >
                      <option disabled >
                        choose a currency
                      </option>
                      <option>BDT</option>
                      <option>PKR</option>
                      <option>INR</option>
                      <option>BHD</option>
                      <option>KWD</option>
                      <option>QAR</option>
                      <option>AUD</option>
                      <option>CAD</option>
                      <option>USD</option>
                      <option>Euro</option>
                      <option>RUB</option>
                    </select>
                  </div>
                </div>
            
                {/* description */}
                <div className=" grid grid-cols-1 items-center gap-2 w-full">
                  <div className="flex  flex-col gap-1">
                    <span className="my-2 ">Job Details</span>
                    <textarea
                      name="description"
                      placeholder="Type job details Details"
                      className="textarea textarea-bordered textarea-lg w-full "
                      required
                    ></textarea>
                  </div>
                </div>
                {/* company */}
                <div className=" grid  grid-cols-1 items-center gap-4 w-full">
                
                  <div className="flex  flex-col gap-1">
                    <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                      Company
                    </span>
                    <div className="w-full">
                      <input
                        type="text"
                        name="company"
                        placeholder="Enter Company Name "
                        className="w-full input-accent px-5 py-1 rounded-md "
                      />
                    </div>
                  </div>
                </div>

                {/* requirements */}
                <div className=" grid grid-cols-1 items-center gap-2 w-full">
                  <div className="flex  flex-col gap-1">
                    <span className="my-2 ">Job Requirements</span>
                    <textarea
                      name="requirements"
                      placeholder="Type a new requirment in a new line"
                      className="textarea textarea-bordered textarea-lg w-full "
                      required
                    ></textarea>
                  </div>
                </div>

                {/* responsibilities */}
                <div className=" grid grid-cols-1 items-center gap-2 w-full">
                  <div className="flex  flex-col gap-1">
                    <span className="my-2 ">Job Responsibilities</span>
                    <textarea
                      name="responsibilities"
                      placeholder="Type a new responsibilities in a new line"
                      className="textarea textarea-bordered textarea-lg w-full "
                      required
                    ></textarea>
                  </div>
                </div>
                {/* hr-email and user hr-name */}

                <div className=" grid grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    HR Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    readOnly
                    defaultValue={user?.email}
                    className="w-full input-accent px-5 py-1 rounded-md"
                    required
                  />
                </div>
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold">
                    HR Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    readOnly
                    defaultValue={user?.displayName}
                    className="w-full input-accent px-5 py-1 rounded-md"
                    required
                  />
                </div>
              </div>
                  {/* company logo */}
                  <div className=" grid grid-cols-1 items-center gap-2 w-full">
                  <div className="flex  flex-col gap-1">
                    <span className="my-2 ">Company Logo</span>
                    <input
                      type="text"
                      name="logo"
                      placeholder="Enter Company logo url"
                      className="w-full input-accent px-5 py-1 rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* button */}
                <div className=" grid grid-cols-1 items-center gap-2 w-full">
                  <button className=" bg-[#D2B48C] w-full input-accent px-5 py-1 rounded-md text-[#ffffff] my-4 mt-5">
                    Comfirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
