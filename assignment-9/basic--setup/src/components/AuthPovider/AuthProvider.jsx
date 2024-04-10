import { createContext } from "react";
import PropTypes from "prop-types";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/project-a9.init";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const createUser = (email , password)=>{
     return createUserWithEmailAndPassword( auth , email , password)
  }

 
  const authInfo = 
   {
    createUser,

   } 
  return (
    <div>
      <AuthContext.Provider value={authInfo} >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes={
  children: PropTypes.node
}
export default AuthProvider;