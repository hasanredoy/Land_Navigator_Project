import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { Link ,useLocation,useNavigate } from "react-router-dom";

AOS.init();

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Helmet } from "react-helmet";

const Login = () => {
  const [eye, setEye] = useState(true);
  const location = useLocation()
  // console.log(location);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //  using context
  const { logInUser, gitHubLogin, googleLogin } = useContext(AuthContext);

  const [err, setErr] = useState("");

  const onSubmit = () => {
    const email = watch("email");
    const password = watch("password");

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
    // log in user

    logInUser(email, password)
      .then(() => {

        toast.success("Logged In Successful");
        navigate(location?.state?location.state:setTimeout(()=>{
          navigate('/')
        },1000))
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err?.message ? err.message : "Failed To Register😔,Please Try Again"
        );
      });
  };

  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(res =>{
      // console.log(res.user);
      toast.success(res.user.displayName+' '+'You Have Logged In Successfully')
      navigate(location?.state?location.state:setTimeout(()=>{
        navigate('/')
      },1000))
    })
    .catch(err =>{
      // console.log(err);
      toast.err(err.message)
    })
  } 
  const handleGitHubLogin = ()=>{
    gitHubLogin()
    .then(res =>{
      toast.success(res.user.displayName+ " "+'You Have Logged In Successfully')
      // console.log(res.user);
      navigate(location?.state?location.state:setTimeout(()=>{
        navigate('/')
      },1000))
    })
    .catch(err =>{
      toast.err(err.message)
      // console.log(err);
    })
  } 


  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-200 to-orange-100 py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Land Navigator | Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" w-[96%] mx-auto md:w-2/3 lg:w-[50%] text-base lg:text-xl  shrink-0  shadow-2xl bg-base-200 rounded-xl"
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
            {errors.email && (
              <span className=" text-red-600">Email is required</span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
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
              className="btn text-white hover:bg-none hover:text-red-400 bg-gradient-to-r from-slate-800 via-purple-800 to-orange-800 text-lg"
            >
              Login
            </button>
          </div>
        </form>
        <div className="divider my-7">or</div>
        <div className=" flex mx-5 flex-col">
          <button onClick={handleGoogleLogin} className="btn border border-emerald-200 text-lg">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.NU47ZE8R8rFbMAB4a_w3FgHaHa&pid=Api&P=0&h=220"
              className=" w-7 h-7 rounded-full"
              alt=""
            />
            Login With Google
          </button>
          <div className="divider"></div>
          <button onClick={handleGitHubLogin}  className="btn border border-gray-200 text-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
              className=" w-9 h-8 rounded-full"
              alt=""
            />
            Login With GitHub
          </button>
        </div>
        <div className="divider"></div>
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
