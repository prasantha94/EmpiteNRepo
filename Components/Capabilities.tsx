import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const items = [
  {
    header: "Website & Mobile App Design",
    content:
      "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives.",
  },
  {
    header: "Motion Graphics & Animation",
    content:
      "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives.",
  },
  {
    header: "User Experience",
    content:
      "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives.",
  },
];

const Capabilities = () => {
  const [accordion, setAccordion] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };

  return (
    <section className="grid md:grid-cols-2 px-20 pt-16 pb-24">
      <div className="space-y-7">
        <p className="font-mulish text-xl font-bold">CAPABILITIES</p>
        <h3 className="font-playfairDisplay font-semibold text-6xl leading-normal">
          We help to create <br /> Digital strategies.
        </h3>
        <div className="max-w-screen-sm">
          <div className="flex justify-between mb-1">
            <span className="text-xl+ font-bold font-spaceGrotesk">
              Web side & Mobile Development
            </span>
            <span className="mr-[14%]">
              <span className="text-base font-mulish bg-black px-2 py-1 h-fit text-white">
                86%
              </span>
              <div className="triangle-tr"></div>
            </span>
          </div>
          <div className="w-full bg-gray-200  rounded-sm+ h-2.5 ">
              <div className="bg-red-600 h-2.5 w-[86%] rounded-sm+"></div>
            </div>
        </div>
      </div>
      <div>
        <div className="md:pl-10">
          {items.map((item, index) => (
            <div className="mt-6" key={index}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {accordion === index ? (
                  <FiMinus size={22} />
                ) : (
                  <FiPlus size={22} />
                )}
                <span className="font-spaceGrotesk font-bold text-xl+">
                  {item.header}
                </span>
              </div>
              {accordion === index ? (
                <div className="font-mulish text-xl mt-4 leading-7">
                  {item.content}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
