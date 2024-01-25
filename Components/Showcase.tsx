import { url } from "inspector";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { GrLinkNext } from "react-icons/gr";

const Showcase = () => {
  return (
    <section className="grid grid-cols-2 ">
      <div className="relative image1 h-[520px] w-full flex justify-center items-center">
  
        <div className="flex flex-col justify-center  flex-1 px-40">
          <h1 className="font-mulish text-xl font-medium text-normalGray max-w-lg tracking-wide">
            CAPABILITIES
          </h1>
          <p className="font-playfairDisplay text-6xl tracking-wide leading-tight text-white ">Mobile.</p>
          <p className="font-playfairDisplay text-6xl tracking-wide leading-tight text-white ">Web.</p>
          <p className="font-playfairDisplay text-6xl tracking-wide leading-tight text-white ">Cloud.</p>
        <div className="flex flex-col w-full pt-4 pb-4 gap-3 sm:flex-row">
      
        <button type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View Services
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

    
        </div>
          
        </div>
      </div>
   
      <div className="relative image2 h-[520px] w-full flex justify-center items-center ">
        {/* <Image
          layout="responsive"
          className=" w-full h-full"
          src="/Mask Group 2.png"
          width={600}
          height={600}
          alt=""
        /> */}
        <div className="flex flex-col justify-center  flex-1 px-40">
          <h1 className="font-mulish text-xl font-medium text-normalGray max-w-lg tracking-wide">
          SHOWCASE
          </h1>
          <p className="font-playfairDisplay text-6xl tracking-wide text-white leading-tight">Our most recent<br/> projects</p>
      
          <div className="flex flex-col w-full pt-14 pb-10 gap-3 sm:flex-row">
          <button type="button" className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View Projects
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
</div>
        </div>
      </div>
    
    </section>
  );
};

export default Showcase;
