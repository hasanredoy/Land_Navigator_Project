import { useContext, useEffect, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../AuthPovider/AuthProvider";

const Clients = () => {
  const [Client, setClient] = useState([]);
  useEffect(() => {
    fetch("/Clients.json")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);
  console.log(Client);

 const {clientsLength} = useContext(AuthContext)  

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 rounded-xl border border-sky-200 p-2 my-10 mt-14">
      {Client.slice(0,clientsLength).map((client , index) => (
        <div
          key={client?.name}
          data-aos={index % 2 === 0 ? "zoom-in" : "fade-up"}
          data-aos-duration="2000"
          className="card w-full bg-yellow-100 shadow-xl p-3"
        >
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={client?.image} />
            </div>
          </div>
          <div className="card-body">
            <h2 className=" text-black lg:text-3xl font-bold text-center">
              {client?.client_name}
            </h2>
            {client?.review && (
              <p className=" text-black ">
                {client?.review}
               
              </p>
            )}

            <div className=" my-5">
              <h3 className=" text-black flex gap-3 justify-start items-center text-lg font-bold">
                Rating By Our Client: {client?.rating}{" "}
                <FaStarHalfAlt className=" lg:text-2xl text-orange-500"></FaStarHalfAlt>{" "}
                out of 5
              </h3>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default Clients;
