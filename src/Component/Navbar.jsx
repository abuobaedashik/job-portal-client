import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/Authcontext/AuthContext";
import logo from '../assets/icons8-job-seeker-color/logo.png'

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const handleSignOut =()=>{
     SignOut()
     .then(()=>{
      console.log('Logout successful');
     })
     .catch(error=>{
       console.log(error.message);
     })
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="text-xl flex items-center gap-3 ">
         <div className="rounded-full">
           <img src={logo} className="w-8 h-8" alt="" />
         </div>
         <div className="text">Job Portal</div>
           </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
       <div className="navbar-end">
       {user ? (
        <div>
          <button onClick={handleSignOut}>SignOut</button>
        </div>
      ) : (
        <div className="">
          <div className="flex items-center  gap-3 mr-5">
            <NavLink to={"/register"}>
              <button>Register</button>
            </NavLink>
            <NavLink to={"/login"}>
              <button className="rounded-md px-3 py-1 text-[#ffffff] bg-[#407BFF] font-bold">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      )}
       </div>
    </div>
  );
};

export default Navbar;
