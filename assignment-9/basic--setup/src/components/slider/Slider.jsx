// import { useEffect, useState } from "react";

const Slider = () => {
  // const [landData , setLandData] = useState([])
  // useEffect(()=>{
  //   fetch('/land.json')
  //   .then(res => res.json())
  //   .then(data =>  setLandData(data))
  // },[])
  // console.log(landData);
  return (
    <div className="carousel w-full min-h-[500px] rounded-xl">
    <div id="slide1" className="carousel-item relative w-full   ">
    
     <img  src="https://i.postimg.cc/XNs9CKv9/banner.jpg" className=" relative w-full z-0 " />
       
         <div className=" absolute  top-[5%] lg:top-[30%] w-[90%] left-[5%] mx-auto lg:w-full text-center text-white space-y-5 bg-gray-900 bg-opacity-45 p-3 lg:p-5 lg:left-0">
          <h1 className=" text-4xl z-50 font-bold">Best Agriculture Lands</h1>
            <p>World Wide We&apos;re providing best Agriculture Land with Farms and etc.</p>
          <button className=" btn rounded-full bg-slate-900 text-orange-400 font-bold text-xl border-none"> Check Out</button>
         </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.postimg.cc/NFT1vS1T/slide2.jpg" className="w-full" />
      <div className=" absolute  top-[5%] lg:top-[30%] w-[90%] left-[5%] mx-auto lg:w-full text-center text-white space-y-5 bg-gray-900 bg-opacity-45 p-3 lg:p-5 lg:left-0">
          <h1 className=" text-4xl z-50 font-bold">Best Agriculture Lands</h1>
            <p>World Wide We&apos;re providing best Agriculture Land with Farms and etc.</p>
          <button className=" btn rounded-full bg-slate-900 text-orange-400 font-bold text-xl border-none"> Check Out</button>
         </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 

    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.pinimg.com/originals/1c/7e/fd/1c7efd9bca0de498d988828de037cd59.jpg" className="w-full" />
      <div className=" absolute  top-[5%] lg:top-[30%] w-[90%] left-[5%] mx-auto lg:w-full text-center text-white space-y-5 bg-gray-900 bg-opacity-45 p-3 lg:p-5 lg:left-0">
          <h1 className=" text-4xl z-50 font-bold">Best Agriculture Lands</h1>
            <p>World Wide We&apos;re providing best Agriculture Land with Farms and etc.</p>
          <button className=" btn rounded-full bg-slate-900 text-orange-400 font-bold text-xl border-none"> Check Out</button>
         </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://i.postimg.cc/pV0P8CnQ/banner.jpg" className="w-full" />
      <div className=" absolute  top-[5%] lg:top-[30%] w-[90%]  left-[5%] lg:left-0 mx-auto lg:w-full text-center text-white space-y-5 bg-gray-900 bg-opacity-45 p-3 lg:p-5">
          <h1 className=" text-4xl z-50 font-bold">Best Agriculture Lands</h1>
            <p>World Wide We&apos;re providing best Agriculture Land with Farms and etc.</p>
          <button className=" btn rounded-full bg-slate-900 text-orange-400 font-bold text-xl border-none"> Check Out</button>
         </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Slider;