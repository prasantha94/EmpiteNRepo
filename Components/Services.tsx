import Image from "next/image";
import React from "react";

interface ServicesProps {
  title: string;
  text: string;
  image: string;
}

const Services = ({ title, text, image }: ServicesProps) => {
  return (
    <div className="space-y-4 mb-5">
      <Image src={image} width={30} height={30} alt="icon" className="h-10 w-10" />
      <p className="text-2xl font-spaceGrotesk font-bold text-white">{title}</p>
      <p className="text-xl font-mulish text-white">{text}</p>
    </div>
  );
};

export default Services;
