import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import employ from "../../src/assets/Employ/employ.jpg";
import { IoMdTime } from "react-icons/io";
import { PiBag, PiBuildingOfficeLight } from "react-icons/pi";

const Details = () => {
  const job = useLoaderData();
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
    hr_email,
    hr_name,
  } = job;
  return (
    <div>
      <img src={employ} alt={title} className="w-full h-[300px] rounded-xl" />
      <div className="mt-6 border-b border-b-rose-300 pb-6">
        <p className="text-2xl text-[#05264E] font-extrabold">
          {title},Creator Success {jobType}
        </p>
        <p className="mt-1 flex gap-3 items-start">
          <p className="text-base font-normal opecity-10 flex items-center gap-1">
            <PiBag /> {jobType}
          </p>
          <p className="text-base font-normal opecity-10 flex items-center gap-1">
            <IoMdTime /> 10 minute ago
          </p>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="info mt-4 rounded-md border border-rose-300 md:w-[70%] p-5">
          <p className="text-2xl  text-[#05264E] font-extrabold">
            Employ Information
          </p>
          <p className="mt-7 flex items-center gap-8">
            <div className="left flex flex-col gap-5">
              <p className="t text-xl  opesity-10 flex items-start">
                <p className="flex items-center gap-1">
                  <PiBuildingOfficeLight />
                  Indrustry -
                </p>
                <p className="">{company}</p>
              </p>
              <p className="t text-xl  opesity-10 flex items-center gap-1">
                <p className="flex items-center gap-1">
                  <PiBuildingOfficeLight /> Salery -{" "}
                </p>
                <p className="flex items-center ">
                  {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
                </p>
              </p>

              <p className=" text-xl opesity-10 flex items-start">
                <p className="flex items-center gap-1">
                  <PiBuildingOfficeLight />
                  Indrustry -
                </p>
                <p className="">{jobType}</p>
              </p>
            </div>
            <div className="right flex flex-col gap-5">
              <p className="text-xl  opesity-10 flex items-start">
                <p className="flex items-center gap-1">
                  <PiBuildingOfficeLight />
                  Indrustry -
                </p>
                <p className="">{company}</p>
              </p>
              <p className="text-xl opesity-10 flex items-center gap-1">
                <p className="flex items-center gap-1">
                  <PiBuildingOfficeLight /> Salery -{" "}
                </p>
                <p className="flex items-center ">
                  {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
                </p>
              </p>

              <p className="text-xl opesity-10 flex items-start">
                <p className="flex items-center gap-1">
                  <PiBuildingOfficeLight />
                  Indrustry -
                </p>
                <p className="">{jobType}</p>
              </p>
            </div>
          </p>
        </div>
        <div className="ad mt-4 rounded-md border border-rose-300 md:w-[25%] p-5">
          <img src={company_logo} alt="" />
          <p className="mt-2">Hire Name: {hr_name}</p>
          <p className="mt-2">Email:{hr_email}</p>
          <p className="mt-2">Last Date:{applicationDeadline}</p>
          <p className="mt-2">Location:{location}</p>
        </div>
      </div>

      <div className="driscption">
        <p className="mt-4 text-base font-semibold">{description}</p>
        <p>
          <p className="mb-3  mt-4 font-bold text-base ">
          Welcome to AliStudio Team The AliStudio Design team has a vision to
          establish a trusted platform that enables productive and healthy
          enterprises in a world of digital and remote everything, constantly
          changing work patterns and norms, and the need for organizational
          resiliency. The ideal candidate will have strong creative skills and a
          portfolio of work which demonstrates their passion for illustrative
          design and typography. 
          </p>
          <ol className="space-y-6">
          This candidate will have experiences in working
          with numerous different design platforms such as digital and print
          forms.
            <li>Essential Knowledge, Skills, and Experience A portfolio
            demonstrating well thought through and polished end to end customer</li>
            <li>journeys 5+ years of industry experience in interactive design and /
          or visual design Excellent interpersonal skills Aware of trends
          inmobile, communications, and collaboration Ability to create highly
          polished design prototypes, mockups, and other communication artifacts
          The ability to scope and estimate efforts accurately and prioritize
          tasks and goals independently History</li>
            <li>of impacting shipping products
          with your work A Bachelor's Degree in Design (or related field) or
          equivalent professional experience Proficiency in a variety of design
          tools such as Figma, Photoshop, Illustrator, and Sketch Preferred
          Experience Designing user experiences for enterprise software /
          services Creating and applying established design principles and
          interaction patterns Aligning or influencing design thinking with
          teams working in other geographies Product Designer Product knowledge</li>
            <li>          Deeply understand the technology and features of the product area to
          which you are assigned. Research: Provide human and business impact
          and insights for products. Deliverables: Create deliverables for your
          product area (for example competitive analyses, user flows, low
          fidelity wireframes, high fidelity mockups, prototypes, etc.) that
          solve real user problems through the user experience.</li>
          </ol>
           
           

        </p>
      </div>

      <div className="button mt-5 mb-4 flex items-center gap-4">
         <Link to={`/applyjob/${_id}`} className="btn bg-[#3C65F5] hover:bg-[#05264E] text-[#ffffff]">Apply Now</Link>
         <div className="btn border border-blue-300">Save Job</div>
      </div>
    </div>
  );
};

export default Details;
