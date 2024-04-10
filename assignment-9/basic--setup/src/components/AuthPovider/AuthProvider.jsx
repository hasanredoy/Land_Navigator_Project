import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/project-a9.init";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const googleProvider =  new GoogleAuthProvider()
const gitHubProvider =  new GithubAuthProvider()

 const [user , setUser] = useState([])
 const [loading , setLading] = useState(true)

  const createUser = (email , password)=>{
    setLading(true)
     return createUserWithEmailAndPassword( auth , email , password)
  }
 
  const logInUser = (email , password)=>{
    setLading(true)
     return signInWithEmailAndPassword( auth , email , password)
  }
  
  const logOut =()=>{
    return signOut(auth)
  }

  const googleLogin = ()=>{
    setLading(true)
    return signInWithPopup(auth , googleProvider)
  }
  const gitHubLogin = ()=>{
    setLading(true)
    return signInWithPopup(auth , gitHubProvider)
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth , currentUser=>{
      setLading(false)
          setUser(currentUser)
    })
    return ()=>{
      unsubscribe
    }
  },[])
 
  const authInfo = 
   {
    createUser,
    logInUser,
    user,
    logOut,
    setUser,
    loading,
    gitHubLogin,
    googleLogin
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