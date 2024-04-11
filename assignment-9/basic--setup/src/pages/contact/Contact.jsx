import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { user } = useContext(AuthContext);

  const [eye, setEye] = useState(true);

  const handleSubmit =(e)=>{
    e.preventDefault()
    toast.success("Submitted Successfully")
  }

  return (
    <div className="my-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Land Navigator | Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className=" space-y-5">
        <h1 className=" text-3xl lg:text-5xl text-center font-bold">
          {" "}
          WellCome {user.displayName}{" "}
        </h1>
        <h4 className=" text-xl text-green-600 text-center font-bold">
          How Can We Help You ?
        </h4>

        <div className=" flex flex-col lg:flex-row ">
          {/* email section */}

          <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 text-xl">
            <h1 className=" text-2xl text-center font-semibold">Email Us </h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control relative">
                <label className="label">
                  <span className="">Any Description (optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Write Here"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">You&apos;re Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">

                  <span className="">Password</span>
                </label>
                <input
                type={eye ? "password" : "text"}
                  
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <a
              className=" absolute top-14 right-3 "
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </a>
              </div>
              <div  className="form-control mt-6">
                <button type="submit" className="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
          {/* number Section  */}
          <div className="divider divider-vertical lg:divider-horizontal">or</div>
          <div className=" p-5 bg-base-200 rounded-xl w-full lg:w-1/2 space-y-5">
            <h1 className=" font-bold text-2xl text-center">
              Contact Via Number
            </h1>
            <h2 className=" text-lg text-center">Mobile: +9970000005 </h2>
            <h2 className=" text-lg text-center">Fax: +99700055 </h2>
            <h2 className=" text-lg text-center">Land Line: 00055 </h2>
            <div className="divider">or</div>
            <div>
              <h1 className=" font-bold text-2xl text-center">
                Direct Contact
              </h1>
              <p  className=" text-lg"> <span className="font-bold text-xl text-red-400"> Head Office :  </span> Al Shati st , Al Rahba , Abudhabi , United Arab Emirates</p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Contact;
