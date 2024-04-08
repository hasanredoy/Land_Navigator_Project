import PropTypes from "prop-types";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./card.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Card = ({ singleData, index }) => {
  return (
    <div
      data-aos={index % 2 === 0 ? "fade-right" : "fade-down"}
      data-aos-duration="2000"
      className="card w-full bg-base-200 shadow-xl p-3"
    >
     

      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img
            src={singleData?.slide1||"https://i.postimg.cc/KYF8vVtF/slide1.jpg"}
            className="w-full min-h-96 max-h-96 rounded-t-lg"
          /></SwiperSlide>
        <SwiperSlide> <img
            src={singleData?.slide2||"https://i.postimg.cc/KYF8vVtF/slide1.jpg"}
            className="w-full min-h-96 max-h-96 rounded-t-lg"
          /></SwiperSlide>
        <SwiperSlide> <img
            src={singleData?.image||"https://i.postimg.cc/KYF8vVtF/slide1.jpg"}
            className="w-full min-h-96 max-h-96 rounded-t-lg"
          /></SwiperSlide>
       
      </Swiper>
      </div>

      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{singleData?.estate_title}</h2>
        {singleData?.description &&<p>{ singleData?.description.slice(0,100)} <span><Link className=" font-bold text-blue-700">Read More...</Link></span></p>}
        <div className="card-actions justify-end">
          <button className=" bg-[#30336b] rounded-full px-5 text-lg font-bold text-yellow-500 flex justify-center items-center h-10 hover:bg-slate-100 ">View Details</button>
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
