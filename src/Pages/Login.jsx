import Lottie from "lottie-react";
import lottielogin from '../assets/Lottie/Login.json'
import React, { useContext } from "react";
import AuthContext from "../Context/Authcontext/AuthContext";

const Login = () => {
    const {LogInUser}=useContext(AuthContext)
    const handleLogin =event =>{
        event.preventDefault();
        const form =event.target
        const email =form.email.value
        const password =form.password.value
        const userData ={email,password}
        console.log(userData);
        // login
        LogInUser(email,password)
        .then(result=>{
            const user =result.user
            console.log(user);
        })
        .catch(error=>{
            const Errormessage =error.message
            console.log(Errormessage);
        })
        
    }
    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={lottielogin} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="text-center text-2xl font-bold ">Login User</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
