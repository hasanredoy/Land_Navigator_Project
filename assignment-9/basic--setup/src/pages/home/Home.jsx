import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import 'animate.css';

const Home = () => {
  return (
    <div style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} className=" container mx-auto my-10 bg-base-100 p-3 border bg-gradient-to-r from-red-50 to-lime-50">
      <section className=" flex flex-col lg:flex-row  gap-10">
        {/* text section ' */}
        <div className=" w-[95%] mx-auto lg:mx-0 lg:w-[40%] flex flex-col justify-center items-center min-h-[500px]">
          
        <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-sky-400 via-[#232af888] to-amber-300 text-2xl lg:text-4xl font-bold animate__animated animate__backInDown animate__delay-0.5s">
             
             Welcome To Land Navigator.
           </h2>
          <h3 className=" font-bold text-xl text-center lg:text-3xl  ">
            <div className=" my-3 lg:my-5"></div>
            <span className=" text-green-500">Let&apos;s</span> Navig🔎te You to
            You&apos;re Dream <span className=" text-green-700">Land</span>.
          </h3>

          <p className=" my-10 text-center">
            We&apos;re Land Navigator. We Will navigate You to You&apos;re dream
            agricultural land, Ranches, Farms, Vineyards, Forests and etc.
          </p>

          <Link>
          <button className="bg-[#30336b] rounded-full px-5 text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 animate__animated animate__fadeInLeft ">Let&apos;s Navigate 🔎</button>
          </Link>
        </div>
        {/* slider section  */}
        <div className=" w-[95%] mx-auto lg:mx-0 lg:w-[60%] ">
          <Slider></Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
