import Image from "next/image";
import React from "react";
import Button from "./Button";

const GoogleMapView = () => {
  return (
<section>
            <div className="grid grid-cols-2 " >
                <div className="relative">
                    <iframe
            className="relative image1 h-full w-full flex justify-center items-center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7601578723884!2d79.84747637448275!3d6.919250918439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b40255555%3A0x33ebfc16f4755ae3!2sEmpite!5e0!3m2!1sen!2slk!4v1706071578680!5m2!1sen!2slk"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
                </div>
                <div className='flex pl-32 py-10'>
                    <div className='flex flex-col gap-7'>
                     
                    <Image src="/telephone.svg" width={30} height={30} alt="" />
            <p className="font-spaceGrotesk bold-26 lg:bold-48 text-black">
              <b>Get in touch</b>
            </p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">
              Work and general inquiries
            </p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">+61.809.120.6705</p>
            <br />
            <p className="font-mooli bold-22 lg:bold-48 text-black">
              <b>Assistance hours:</b>
            </p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">Moday - Friday</p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">9.00 am to 5.00 pm</p>
                        

                    </div>
                    <div className='flex flex-col gap-5 px-20'>
                    <Image src="/email.svg" width={30} height={30} alt="" />
            <p className="pt-4 font-spaceGrotesk bold-26 lg:bold-48 text-black">
              <b>Post Adress</b>
            </p>
            <p className="font-moolibold-22 lg:bold-48 text-black">level 1, unit 9/677</p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">Springvale Road,</p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">Mulgrave VIC 3170</p>
            <p className="font-mooli bold-22 lg:bold-48 text-black">Australia</p>
                    </div>

                </div>
                
            </div>
            <div>

            </div>
        </section>
  
  );
};

export default GoogleMapView;
