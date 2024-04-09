import { CiLocationOn } from "react-icons/ci";
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import { useParams, useLoaderData, Link } from "react-router-dom";
import "../card/card.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Map from "./Map";




const Details = () => {
 
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const singleData = data.find((singleData) => singleData.id === +id);
  console.log(singleData);


  return (
    <div
      // data-aos={index % 2 === 0 ? "fade-right" : "fade-down"}
      // data-aos-duration="2000"
      className=" bg-green-100 shadow-xl p-3 flex flex-col lg:flex-row gap-5"
    >
      <div className=" w-1/2">
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
              className=" rounded-t-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                singleData?.slide2 || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className="rounded-t-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                singleData?.image || "https://i.postimg.cc/KYF8vVtF/slide1.jpg"
              }
              className=" rounded-t-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="card-body">
        <h2 className=" text-black lg:text-3xl font-bold">
          {singleData?.estate_title}
        </h2>
        {singleData?.description && (
          <p className=" text-black">{singleData?.description} </p>
        )}

        <div className=" flex justify-between my-10">
          <h3
            data-aos-duration="1000"
            data-aos="fade-left"
            className=" flex gap-3  font-bold text-sm lg:text-lg text-purple-600 items-center justify-center"
          >
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

           <Map></Map>
        </div>
        <div className=" my-5">
          <h3 className=" text-black flex gap-3 justify-center items-center text-xl font-bold">
            Rating By Our Clients: {singleData?.rating}{" "}
            <FaStarHalfAlt className=" lg:text-2xl text-orange-500"></FaStarHalfAlt>{" "}
            out of 5
          </h3>
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
