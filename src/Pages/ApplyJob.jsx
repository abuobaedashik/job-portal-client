import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ApplyJob = () => {
  const job = useLoaderData();
  console.log(job);
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const phone = form.phone.value;
    const application = {
      job_id: id,
      user_email: user.email,
      linkedin,
      github,
      resume,
      phone,
    };
    console.log(application);
    fetch("http://localhost:3000/job_application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div>
        <div className="py-6 ">
          <form onSubmit={handleSubmit} className="p-5 ">
            <div className="flex items-center flex-col mx-auto px-6 py-3 w-8/12 border border-blue-500 rounded-xl  bg-[#F4F3F0] ">
              <div className="text-xl font-semibold mt-3 mb-5">Apply Job</div>
              {/* linkedin and github*/}
              <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1 ">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    LinkedIn Profile Url
                  </span>
                  <input
                    type="url"
                    placeholder="Enter Linkedin profile Url"
                    name="linkedin"
                    className="  input-accent px-5 py-1 rounded-md "
                  />
                </div>
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Github Profile
                  </span>
                  <div className="w-full">
                    <input
                      type="url"
                      name="github"
                      placeholder="Enter Github profile Url"
                      className="w-full input-accent px-5 py-1 rounded-md "
                    />
                  </div>
                </div>
              </div>
              {/* resume and phone*/}
              <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Resume Url
                  </span>
                  <input
                    type="url"
                    name="resume"
                    placeholder="Enter Resume Profile Url"
                    className="w-full input-accent px-5 py-1 rounded-md"
                  />
                </div>
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Contact No.
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="w-full input-accent px-5 py-1 rounded-md"
                  />
                </div>
              </div>
              {/* year and genre */}
              {/* <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Publishing Year
                  </span>
                  <input
                    type="text"
                    name="year"
                    placeholder="publishing year"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  />
                </div>
               
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Genres
                  </span>
                  <select
                    name="genre"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  >
                    <option disabled selected>
                      Genres
                    </option>
                    <option>Action</option>
                    <option>Animation</option>
                    <option>RPG</option>
                    <option>Adventure</option>
                  </select>
                </div>
              </div> */}

              {/* <div className=" grid grid-cols-1 items-center gap-2 w-full">
              <div className="flex  flex-col gap-1">
                <span className="my-2 ">Photo URL</span>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo url"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div> */}
              {/* email and user name */}

              {/* <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold ">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    className="w-full input-accent px-5 py-1 rounded-md"
                  />
                </div>
                <div className="flex  flex-col gap-1">
                  <span className="ml-2 mt-2 mb-1 text-base font-semibold">
                    User Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={user?.displayName}
                    className="w-full input-accent px-5 py-1 rounded-md"
                  />
                </div>
              </div> */}

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
  );
};

export default ApplyJob;
