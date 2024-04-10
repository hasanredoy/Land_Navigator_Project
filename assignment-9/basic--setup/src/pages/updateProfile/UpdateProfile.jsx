import { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../../firebase/project-a9.init";
const UpdateProfile = () => {
  const nameRef =  useRef()
  const photoRef =  useRef()
  const {user , setUser} = useContext(AuthContext)
  console.log(auth.currentUser);
  const willUpdateUserProfile=(e)=>{
    e.preventDefault()
    const name = nameRef.current.value
    const photo = photoRef.current.value
        // updateProfile(auth.currentUser,{
        //   displayName:name,
        //   photoURL:photo
        // })
        setUser({
          displayName:name,
          photoURL:photo,
          email:auth.currentUser.email
        })
      }
      // useEffect(()=>{
      //   const unsubscribe= onAuthStateChanged(auth , currentUser=>{
      //         // setUser(currentUser||'')
              
      //         console.log(currentUser);
      //   })
      //   return ()=>{
      //     unsubscribe
      //   }
      // },[])
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Land Navigator | Update Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card shrink-0 w-[95%] mx-auto md:w-2/3 lg:w-1/2 shadow-2xl bg-base-100">
        <h1 className=" text-center text-3xl font-bold text-purple-600">Wellcome {user?.displayName}</h1>
        <h2 className=" text-center text-xl font-bold py-3">You&apos;re Email: {user?.email}</h2>
        <form onSubmit={willUpdateUserProfile} className="card-body">
          <h1 className=" text-xl lg:text-2xl font-bold text-amber-400">Would You Like To Update You&apos;re Profile</h1>
          <div className="divider"></div>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-bold">Change You&apos;re Name</span>
            </label>
            <input
            defaultValue={user?.displayName}
              ref={nameRef}  
            type="text"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
            <span className="text-xl font-bold">Change You&apos;re Photo URL</span>
            </label>
            <input
              ref={photoRef}
              type="url"
              defaultValue={user?.photoURL}
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-accent">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
