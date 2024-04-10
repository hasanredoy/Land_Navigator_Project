import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import {Helmet} from "react-helmet";
 


AOS.init();

const Register = () => {
  const [err, setErr] = useState("");
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    const name = watch("name");
    const email = watch("email");
    const photo = watch("photo");
    const password = watch("password");
    console.log(name);
    console.log(e);
    setErr("");
    if (password.length < 6) {
      setErr("Password Should be more than 6 Character");
      return;
    }
    setErr("");
    if (!/[A-Za-z]/.test(password)) {
      setErr(
        "Password Must Have One Uppercase Letter And One LowerCase Letter"
      );
      return;
    }
    // creating user
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });
        // console.log(res?.user);
        toast.success("Registered Successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err?.message ? err.message : "Failed To Register😔,Please Try Again"
        );
      });
  };

  const [eye, setEye] = useState(true);

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-200 to-orange-100 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Land Navigator | Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" w-[96%] mx-auto md:w-2/3 lg:w-1/2 text-base lg:text-xl  shrink-0 max-w-lg shadow-2xl bg-base-200 rounded-xl my-10"
      >
        <h1 className=" font-bold text-lg lg:text-xl text-center py-5">
          {" "}
          Please Register
        </h1>
        <div className="divider my-0"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="form-control">
            <label className="label ">
              <span className="">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="You're Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className=" text-red-600">Name is required</span>
            )}
          </div>

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
            {errors.email && (
              <span className=" text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="">Photo URL</span>
            </label>
            <input
              {...register("photo", { required: true })}
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.photo && (
              <span className=" text-red-600">Photo URL is required</span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
              onChange={() => setErr(null)}
              {...register("password", { required: true })}
              type={eye ? "password" : "text"}
              placeholder="Password"
              className="input input-bordered"
              name="password"
            />
            {err === "Password Should be more than 6 Character" && (
              <span className=" text-red-600">{err}</span>
            )}
            {err ===
            "Password Must Have One Uppercase Letter And One LowerCase Letter" ? (
              <span className=" text-red-600">{err}</span>
            ) : (
              ""
            )}
            {errors.password && (
              <span className=" text-red-600">Password is required</span>
            )}
            <a
              className=" absolute top-14 right-3 "
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </a>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white hover:bg-none hover:text-red-400 bg-gradient-to-r from-green-800 via-sky-800 to-gray-800 text-lg"
            >
              Register
            </button>
          </div>
        </form>
        <p className=" text-center  text-xl py-3">
          Already Have An Account !{" "}
          <Link
            to={"/login"}
            className=" font-bold text-blue-700 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
