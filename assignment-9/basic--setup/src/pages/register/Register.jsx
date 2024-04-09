
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

AOS.init();


const Register = () => {
  const [eye , setEye ]=useState(true)

  const handleRegisterSubmit = (e)=>{
    e.preventDefault()
  } 

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-200 to-orange-100 ">
      <div data-aos="zoom-in" data-aos-duration="1000" className=" w-[96%] mx-auto md:w-2/3 lg:w-1/2 text-base lg:text-xl  shrink-0 max-w-lg shadow-2xl bg-base-200 rounded-xl my-10">
        <h1 className=" font-bold text-lg lg:text-xl text-center py-5"> Please LogIn To Access Our All Facilities </h1>
        <form onSubmit={handleRegisterSubmit} className="card-body ">
          <div className="form-control">
            <label className="label ">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              placeholder="You're Name"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="You're Email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
              type={eye?'text':'password'}
              placeholder="Password"
              className="input input-bordered"
              name="password"
              required
            />
               <button className=" absolute bottom-3 right-3 " onClick={()=>setEye(!eye)}>{eye?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</button>
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn text-white hover:bg-none hover:text-red-400 bg-gradient-to-r from-green-800 via-sky-800 to-gray-800 text-lg">Register</button>
          </div>
        </form>
        <p className=" text-center  text-xl py-3">Already Have An Account ! <Link to={'/login'} className=" font-bold text-blue-700 cursor-pointer">Login</Link></p>

      </div>
    </div>
  );
};

export default Register;
