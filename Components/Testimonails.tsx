import Image from "next/image";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { HiArrowLeft, HiArrowSmallRight } from "react-icons/hi2";

const userData = [
  {
    id: 1,
    title: "Great Designing Team",
    name: "Jared Ortlipp",
    content:
      "Need a one life feedback from Jared about empire and its work related to good 2 give.",
    jobTitle: "CTO, Good 2 Give",
    image: "/Image 2.png",
  },
  {
    id: 2,
    title: "Great Designing Team",
    content:
      "Need a one life feedback from Jared about empire and its work related to good 2 give.",
    name: "Jone Doe",
    jobTitle: "Head of Customer Marketing",
    image: "/Image 2.png",
  },
  {
    id: 3,
    title: "Great Designing Team",
    content:
      "Need a one life feedback from Jared about empire and its work related to good 2 give.",
    name: "Frank Smith",
    jobTitle: "Content Marketing Manager",
    image: "/Image 2.png",
  },
];

const Testimonails = () => {
  const [sliderCount, setSliderCount] = useState<number>(0);

  const PrevNavigation = () => {
    if (sliderCount > 0) {
      setSliderCount(sliderCount - 1);
    }
  };

  const NextNavigation = () => {
    if (sliderCount < userData.length - 1) {
      setSliderCount(sliderCount + 1);
    }
  };

  return (
    <section className="grid grid-cols-2 mx-auto">
      <div className="pl-20 pt-20">
        <p className="bold-22 lg:bold-48 ">TESTIMONAILS</p>
        <p className="bold-52 lg:bold-68 ">We help to achive mutual goals</p>
        <div className="mt-10">
          <CarouselProvider
            totalSlides={3}
            visibleSlides={1}
            currentSlide={sliderCount}
            naturalSlideHeight={0}
            naturalSlideWidth={0}
          >
            <>
              <Slider>
                {userData.map((testimonial) => (
                  <Slide
                    index={testimonial.id}
                    key={testimonial.id}
                    className="slider"
                  >
                    <Image
                      src={testimonial.image}
                      width={20}
                      height={20}
                      alt="user"
                      className="rounded-full w-[75px] h-[75px] mb-4"
                    />
                    <p className="text-base">“{testimonial.title}”</p>
                    <p className="text-base">“{testimonial.content}”</p>

                    <p className="text-base">{testimonial.name}</p>
                    <p className="text-base">{testimonial.jobTitle}</p>
                  </Slide>
                ))}
              </Slider>
            </>
          </CarouselProvider>
          <div className="flex justify-between items-center pr-20">
            <div className="flex gap-3 justify-between items-center ">
              <span>{sliderCount + 1}</span>
              <span className="bg-black w-12 h-2x"></span>
              <span>{userData.length}</span>
            </div>

            <div className="flex gap-4 justify-between items-center ">
              <span
                onClick={PrevNavigation}
                className="bg-lightGray w-12 h-12 p-3 flex justify-center items-center rounded-full cursor-pointer hover:opacity-90"
              >
                <HiArrowLeft size={24} />
              </span>
              <span
                onClick={NextNavigation}
                className="bg-lightGray w-12 h-12 p-3  flex justify-center items-center rounded-full cursor-pointer hover:opacity-90"
              >
                <HiArrowSmallRight size={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[640px]">
        <Image
          className=" w-full h-full"
          alt="Mountains"
          src="/Mask Group 7.png"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Testimonails;
