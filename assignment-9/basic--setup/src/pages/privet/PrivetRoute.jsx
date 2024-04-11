import { useContext, } from "react";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";

import {Navigate,useLocation} from "react-router-dom"
import {PropTypes} from "prop-types"

const PrivetRoute = ({children}) => {
 const {loading , user} = useContext(AuthContext)
 const loc = useLocation()
 console.log( loc);
   if(loading) return<span className=" absolute loading loading-bars loading-lg top-[20%] z-50 right-[50%]"></span>
  if(!user)return <Navigate state={loc.pathname} to={'/login'}></Navigate>
 
  return children
};


PrivetRoute.propTypes={
  children:PropTypes.node
}
export default PrivetRoute;