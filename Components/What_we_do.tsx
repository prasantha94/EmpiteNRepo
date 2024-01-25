import React from "react";
import Image from "next/image";
import ComputerIcon from "../public/computer.svg";
import WebIcon from "../public/bracket.svg";
import MobileIcon from "../public/weather.svg";
import UIIcon from "../public/ux-design.svg";
import Services from "./Services";

const What_we_do = () => {
  return (
    <section className="bg-black grid lg:grid-cols-2 px-20 pt-20 pb-32">
      <div className="">
        <p className="font-mulish font-bold text-xl text-darkGray">
          What we do
        </p>
        <p className="font-playfairDisplay text-6xl tracking-wide leading-tight text-white mt-5">
          Intergrated <br /> Solutions across <br />
          all digital platforms
        </p>
      </div>
      <div>
        <p className="font-spaceGrotesk text-xl text-white">
          We are committed to keeping you ahead in today’s fast-paced and
          ever-evolving world by delivering digital solutions that solve
          problems in a secure, simple and effective way.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 pt-16">
          <Services
            image={ComputerIcon}
            title="Custom Software"
            text="We create solutions that solve your business problems. Our team has a decade long success track record."
          />
          <Services
            image={WebIcon}
            title="Web Applications"
            text="We typically build all web applications from scratch to satisfy your requirements."
          />
          <Services
            image={MobileIcon}
            title="Mobile Applications"
            text="We transform your mobile app ideas into high quality customised apps that are easy to use."
          />
          <Services
            image={UIIcon}
            title="UI / UX Design"
            text="We craft better user experience and Interface designs for your digital products."
          />
        </div>
      </div>
    </section>
  );
};

export default What_we_do;
