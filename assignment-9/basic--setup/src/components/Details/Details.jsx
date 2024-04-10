import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign, FaEye, FaStarHalfAlt } from "react-icons/fa";
import { useParams, useLoaderData, Link } from "react-router-dom";
import "../card/card.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LiaChartAreaSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "../AuthPovider/AuthProvider";

const Details = () => {
  const {loading } = useContext(AuthContext)
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const singleData = data.find((singleData) => singleData.id === +id);
  console.log(singleData);

  return (
    <div
    
      // data-aos={index % 2 === 0 ? "fade-right" : "fade-down"}
      // data-aos-duration="2000"
      className=" relative bg-green-100 shadow-xl p-3 flex flex-col lg:flex-row gap-5"
    >
      <div>
      {loading&&<span className=" absolute loading loading-bars loading-lg top-[20%] z-50 right-[50%]"></span>}
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Land Navigator | Land Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className=" w-full lg:w-1/2 h-[400px] lg:max-h-[500px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={
                singleData?.slide1 || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className=" rounded-t-lg  h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                singleData?.slide2 || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className="rounded-t-lg h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                singleData?.image || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className=" rounded-t-lg h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="card-body border-l-none lg:border-l border-gray-300">
        <h2 className=" text-black lg:text-3xl font-bold">
          {singleData?.estate_title}
        </h2>
        {singleData?.description && (
          <p className=" text-black text-lg">{singleData?.description} </p>
        )}

        <h1 className=" text-black font-bold text-xl py-3">
          Segment:{" "}
          <span className=" text-yellow-500">{singleData?.segment_name}</span>
        </h1>
        <div className="divider"></div>
        <h1 className=" font-bold text-xl text-black">
          For: <span className=" text-yellow-500">{singleData?.status}</span>
        </h1>
        <div className=" flex flex-col lg:flex-row justify-between my-10">
          <h3 className=" flex gap-3  font-bold text-sm lg:text-lg text-gray-600 items-center justify-start  lg:justify-center ">
            {" "}
            Price:{" "}
            <FaDollarSign className=" text-red-400 text-xl lg:text-2xl"></FaDollarSign>{" "}
            {singleData?.price}
          </h3>
          <div className=" divider"></div>
          <h3 className=" flex gap-3  font-bold text-sm lg:text-lg text-stone-600 items-center justify-end  lg:justify-center  pl-2 ">
            Area:
            <LiaChartAreaSolid className=" text-xl lg:text-2xl text-gray-600"></LiaChartAreaSolid>{" "}
            {singleData?.area}
          </h3>
        </div>

        <div className=" flex justify-between my-3">
          <h3 className=" flex gap-3  font-bold text-sm lg:text-lg text-purple-600 items-center justify-center">
            {" "}
            Total View:{" "}
            <FaEye className=" text-red-400 text-xl lg:text-2xl"></FaEye>{" "}
            {singleData?.property_view}
          </h3>
        </div>
        <div>
          <h3 className=" flex gap-3  font-bold text-sm lg:text-lg text-emerald-600 items-center pl-2 ">
            {" "}
            Location:{" "}
            <CiLocationOn className=" text-xl lg:text-2xl text-red-600"></CiLocationOn>{" "}
            {singleData?.location}
          </h3>
        </div>
        <div className=" my-3">
          <h3 className=" text-black flex gap-1 justify-start items-center text-lg lg:text-xl font-semibold">
            Rating: {singleData?.rating}{" "}
            <FaStarHalfAlt className="text-xl lg:text-2xl text-orange-500"></FaStarHalfAlt>{" "}
            out of 5
          </h3>
        </div>

        <div className=" my-3 text-black">
          <h1 className="font-bold text-xl">Facilities You&apos;ll Get:</h1>
          <ul className=" space-y-2 font-semibold">
            {singleData?.facilities.map((fac, index) => (
              <li key={index} className=" capitalize">
                {1 + index}.{fac}
              </li>
            ))}
          </ul>
        </div>

        <div className=" w-full flex my-5">
          <Link to={`/`}>
            <button className=" bg-[#30336b] rounded-full px-5 text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 w-full">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
