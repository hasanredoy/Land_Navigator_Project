import Slider from "../../components/slider/Slider";
import "animate.css";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import Clients from "../../components/Clients/Clients";
import {Helmet} from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthPovider/AuthProvider";
 


const Home = () => {
   
  const {clientsLength , setClientsLength} = useContext(AuthContext)

  const land = useLoaderData();
  console.log(clientsLength);
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Land Navigator | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section
        style={{
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }}
        className=" mx-auto my-10 bg-base-100 p-3 border bg-gradient-to-r from-red-50 to-lime-50 flex flex-col lg:flex-row  gap-10"
      >
        {/* text section ' */}
        <div className=" w-[90%]  lg:mx-0 lg:w-[40%] flex flex-col justify-center items-center min-h-[500px]">
          <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-sky-400 via-[#232af888] to-amber-300 text-2xl lg:text-4xl font-bold animate__animated animate__backInDown animate__delay-0.5s">
            Welcome To Land Navigator.
          </h2>
          <h3 className=" font-bold text-xl text-black text-center lg:text-3xl  ">
            <div className=" my-3 lg:my-5"></div>
            <span className=" text-green-500">Let&apos;s</span> Navig🔎te You to
            You&apos;re Dream <span className=" text-green-700">Land</span>.
          </h3>

          <p className=" my-10 text-center text-black">
            We&apos;re Land Navigator. We Will navigate You to You&apos;re dream
            agricultural land, Ranches, Farms, Vineyards, Forests and etc.
          </p>

          <a href="#cards">
            <button className="bg-[#30336b] rounded-full px-5 text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 animate__animated animate__fadeInLeft ">
              Let&apos;s Navigate 🔎
            </button>
          </a>
        </div>
        {/* slider section  */}
        <div className=" w-full lg:mx-0 lg:w-[60%] ">
          <Slider></Slider>
        </div>
      </section>

      {/* Card section  */}

      <section className=" py-10 mx-auto w-[94%] lg:container">
        {/* text div  */}
        <div className=" flex justify-center w-[100%] lg:w-full text-center flex-col gap-5 bg-red-50 py-5 text-black">
          <h1 className=" text-2xl lg:text-4xl font-bold">
            Choose You&apos;re Dream Estate
          </h1>
          <p className=" max-w-xs lg:max-w-lg mx-auto text-lg">
            Assalamualaikum , wellcome to our page here You can Choose
            You&apos;re Dream Estate about agricultural land, ranches, farms,
            vineyards, forests, Plantations etc{" "}
          </p>
        </div>

        {/* card div  */}
        <div
          id="cards"
          className=" grid grid-cols-1 lg:grid-cols-2 mx-auto w-[98%] lg:container gap-10 rounded-xl border border-sky-200 p-2 my-10 mt-14"
        >
          {land.map((data, index) => (
            <Card key={data.id} singleData={data} index={index}></Card>
          ))}
        </div>
      </section>
      {/* Clients section  */}

      <section className=" py-10">
        {/* text div  */}
        <div className=" flex justify-center w-full text-center flex-col gap-5 bg-gray-50 py-5 text-black">
          <h1 className=" text-2xl lg:text-4xl font-bold">
            Check Out What Our Clients Says About Us.
          </h1>
         
        </div>

        {/* card div  */}
        <div
          id="cards"
         
        >
        <Clients></Clients>
{
  clientsLength==6 && <button onClick={ ()=>setClientsLength(12)}  className=" btn btn-accent flex justify-center mx-auto ">View More </button>
}
        </div>
      </section>
    </div>
  );
};

export default Home;
