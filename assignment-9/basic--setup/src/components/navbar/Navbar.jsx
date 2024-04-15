import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthProvider";
// ..
AOS.init();

const Navbar = () => {
  const { user, logOut , setUser  } = useContext(AuthContext);
  const [theme, setTheme] = useState(true);
  if (theme) {
    document.querySelector("html").setAttribute("data-theme", "light");
  }
  if (!theme) {
    document.querySelector("html").setAttribute("data-theme", "synthwave");
  }

  const handleLogOut =()=>{
    
    logOut()
    .then(()=>{
      
      setUser('')
    })
    .catch()
  }
  const navBarLinks = (
    <div className=" flex flex-col lg:flex-row gap-3 lg:gap-6 items-center font-bold text-lg">
      <NavLink className={" "} to={"/"}>
        Home
      </NavLink>

      <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      <NavLink to={"/contact"}>Contact Us</NavLink>
    </div>
  );
  return (
    <div className="navbar  bg-base-300  rounded-xl  lg:h-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navBarLinks}
          </ul>
        </div>
        <div>
          <Link
            to={"/"}
            className="btn btn-ghost text-sm lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#800080] to-sky-400 via-[#082a7b] animate-none  "
          >
            Land Navigator
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarLinks}</ul>
      </div>
      <div className="navbar-end flex items-center justify-end gap-2 lg:gap-5 h-full border-l pl-2 border-black lg:border-none">
        <div className=" tooltip tooltip-bottom" data-tip="Click To Change Theme">
        <label className="swap swap-rotate w-10 h-10 ">
          {/* this hidden checkbox controls the state */}
          <input
            onClick={() => setTheme(!theme)}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-8 h-8 lg:w-10 lg:h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current  w-8 h-8 lg:w-10 lg:h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        </div>

        {
          user&&<div className="tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>
          <div
            className=
              " w-10 h-10 lg:w-14 lg:h-14 rounded-full" 
            
          >
            <img
              className=" rounded-full w-10 h-10 lg:w-14 lg:h-14 "
              src={user?.photoURL||'https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=220'}
            />
          </div>
        </div>
        }
        {
          user?  <button onClick={handleLogOut} className=" bg-[#30336b] rounded-full px-2 lg:px-5 text-sm lg:text-lg font-semibold lg:font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 ">
          Log Out
        </button>:
        <Link to={"/login"}>
          <button className=" bg-[#30336b] rounded-full px-2 lg:px-5 text-sm lg:text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 ">
            Log In
          </button>
        </Link>
        
      
      
        }
      </div>
    </div>
  );
};

export default Navbar;
