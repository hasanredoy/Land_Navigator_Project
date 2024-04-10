import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

AOS.init();

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const [eye, setEye] = useState(true);
  //  using context
  const { name } = useContext(AuthContext);
  console.log(name);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    const name = watch("name");
    console.log(name);
    console.log(e);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-200 to-orange-100">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" w-[96%] mx-auto md:w-2/3 lg:w-1/2 text-base lg:text-xl  shrink-0 max-w-lg shadow-2xl bg-base-200 rounded-xl"
      >
        <h1 className=" font-bold text-lg lg:text-xl text-center py-5">
          {" "}
          Please LogIn To Access Our All Facilities{" "}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
        <div className="form-control">
            <label className="label ">
              <span className="">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="You're Email"
              className="input input-bordered"
              name="email"
              
            />
            {errors.email && <span  className=" text-red-600">Email is required</span>}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type={eye ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered"
              name="password"
              
            />
            {errors.password && <span  className=" text-red-600">Password is required</span>}
            <button
              className=" absolute top-14 right-3 "
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white hover:bg-none hover:text-red-400 bg-gradient-to-r from-slate-800 via-purple-800 to-orange-800 text-lg"
            >
              Login
            </button>
          </div>
        </form>
        <p className=" text-center  text-xl py-3">
          New Here !{" "}
          <Link
            to={"/register"}
            className=" font-bold text-blue-700 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
