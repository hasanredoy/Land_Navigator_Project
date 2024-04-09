
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const Login = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-200 to-orange-100">
      <div data-aos="zoom-in" data-aos-duration="1000" className=" w-[96%] mx-auto md:w-2/3 lg:w-1/2 text-base lg:text-xl  shrink-0 max-w-lg shadow-2xl bg-base-200 rounded-xl">
        <h1 className=" font-bold text-lg lg:text-xl text-center py-5"> Please LogIn To Access Our All Facilities </h1>
        <form className="card-body ">
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
            <label className="label">
              <span className="">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              name="password"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white hover:bg-none hover:text-red-400 bg-gradient-to-r from-slate-800 via-purple-800 to-orange-800 text-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
