import {Link, NavLink } from "react-router-dom"
import './navbar.css'
const Navbar = () => {

  const navBarLinks = < div className=" flex gap-6 items-center font-bold text-lg">
    <NavLink className={' '}  to={'/'}>Home</NavLink> 
    
    <NavLink  to={'/update-profile'}>Update Profile</NavLink> 
    <NavLink to={"/about-us"}>About Us</NavLink> 
  </div>
  return (
    <div className="navbar bg-base-300  rounded-xl">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navBarLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-red-300 to-slate-500    ">Land Navigator</Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navBarLinks}
        </ul>
      </div>
      <div className="navbar-end">
      <button className=" bg-[#30336b] rounded-full px-5 text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 ">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
