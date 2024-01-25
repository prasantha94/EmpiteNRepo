import Image from "next/image";
import React from "react";
import BgImage from "../public/Mask Group 8@2x.png"

const Smartworks = () => {
  return (
    <section >
<div className="h-[520px] w-full flex">
<div className="image4 flex flex-col items-center justify-center flex-1 px-10 text-center">
        <div className="flex flex-col  flex-6 px-10 ">
        <Image
                        className=''
                        src="/Group 16.svg"
                        width={74}
                        height={74}
                        alt="hero"
                    />
        </div>
</div>
  
      </div>
  
    </section>
  );
};

export default Smartworks;
