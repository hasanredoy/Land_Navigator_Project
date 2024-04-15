import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import { LiaChartAreaSolid } from "react-icons/lia";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// import required modules

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Card = ({ singleData, index }) => {
  return (
    <div
      data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
      data-aos-duration="2000"
      className="card  bg-green-100 shadow-xl p-3"
    >
      <div>

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
        <SwiperSlide><img
              src={
                singleData?.slide1 || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className="w-full min-h-96 max-h-96 rounded-t-lg"/></SwiperSlide>
        <SwiperSlide><img
              src={
                singleData?.slide2 || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className="w-full min-h-96 max-h-96 rounded-t-lg"/></SwiperSlide>
        <SwiperSlide><img
              src={
                singleData?.image || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className="w-full min-h-96 max-h-96 rounded-t-lg"/></SwiperSlide>
       
      </Swiper>
      </div>

      <div className="card-body">
        <h2 className=" text-black lg:text-3xl font-bold">
          {singleData?.estate_title}
        </h2>
        {singleData?.description && (
          <p className=" text-black">
            {singleData?.description.slice(0, 150)}{" "}
            <span>
              <Link to={`/details/${singleData.id}`} className="  font-bold text-blue-700">Read More...</Link>
            </span>
          </p>
        )}

        <div className=" flex flex-col lg:flex-row gap-y-4  justify-between my-10">
          <h3
            data-aos-duration="1000"
            data-aos="zoom-in"
            className=" flex gap-3  font-bold text-sm lg:text-lg text-purple-600 items-center justify-center border-none lg:border-r pr-2 border-gray-600"
          >
            {" "}
            Total View:{" "}
            <FaEye className=" text-red-400 text-xl lg:text-2xl"></FaEye>{" "}
            {singleData?.property_view}
          </h3>

          <h3
            data-aos-duration="1000"
            data-aos="zoom-out"
            className=" flex gap-3  font-bold text-sm lg:text-lg text-emerald-600 items-center justify-center pl-2 border-none lg:border-l border-gray-600"
          >
            {" "}
            Location:{" "}
            <CiLocationOn className=" text-xl lg:text-2xl text-red-600"></CiLocationOn>{" "}
            {singleData?.location}
          </h3>
        </div>


          <h1 className=" font-bold text-xl text-black">For: <span className=" text-yellow-500">{singleData.status}</span></h1>
        <div className=" flex flex-col lg:flex-row justify-between my-10">
          <h3
          
            className=" flex gap-3  font-bold text-sm lg:text-lg text-gray-600 items-center justify-start  lg:justify-center "
          >
            {" "}
            Price:{" "}
            <FaDollarSign className=" text-red-400 text-xl lg:text-2xl"></FaDollarSign>{" "}
            {singleData?.price}
          </h3>
         <div className=" divider"></div>
          <h3
          
            className=" flex gap-3  font-bold text-sm lg:text-lg text-stone-600 items-center justify-end  lg:justify-center  pl-2 "
          >
            Area:
            <LiaChartAreaSolid className=" text-xl lg:text-2xl text-gray-600"></LiaChartAreaSolid>{" "}
            {singleData?.area}
          </h3>
        </div>


       <div className=" my-5">
        <h3 className=" text-black flex gap-3 justify-center items-center  text-lg lg:text-xl font-bold">Rating:    {singleData?.rating}  <FaStarHalfAlt className=" text-lg lg:text-2xl text-orange-500"></FaStarHalfAlt> out of 5</h3>
       </div>
        <div className=" w-full  flex justify-center my-5">
         <Link to={`/details/${singleData.id}`}>
         <button className=" bg-[#30336b] rounded-full px-5 text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 w-full">
            View Details
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  singleData: PropTypes.object,
  index: PropTypes.number,
};

export default Card;
