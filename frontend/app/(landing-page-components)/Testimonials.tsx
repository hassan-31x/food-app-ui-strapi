"use client"

import { useState } from "react";
import Image from "next/image";
import TestimonialBox from "./TestimonialBox";
import { TestimonialsSection } from "@/types/custom-types";

type Props = {
  testimonials : TestimonialsSection
};

function Testimonials({ testimonials }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0)

  const prevSelect = () => {
    if (selectedIndex==0) {
      return;
    }

    setSelectedIndex(selectedIndex-1)
  }
  const nextSelect = () => {
    if (selectedIndex >= testimonials?.testimonialCards?.length-1) {
        setSelectedIndex(0)
      return;
    }

    setSelectedIndex(selectedIndex+1)
  }

  return (
    <section className="h-[13%] w-full mt-[4%] md:mt-[6%] ">
      {/* Testimonials Heading */}
      <div className="h-10 md:h-16 w-[75%] md:w-[67%] mx-auto flex flex-row mt-3 md:mt-6 justify-between items-center">
        <div className="h-full w-[18%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftLine.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[8%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftWing.svg"
            alt="Left line"
          />
        </div>
        <h1 className="blanch text-4xl md:text-5xl lg:text-6xl text-black text-center">
          {testimonials?.heading}
        </h1>
        <div className="h-full w-[8%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightWing.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[18%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightLine.svg"
            alt="Left line"
          />
        </div>
      </div>
      {/* Decoration */}
      <div className="flex flex-row  justify-between w-[27%] h-12 md:h-20 mx-auto mt-[3%] pl-[2%]">
        <div className="w-[15%] h-full relative ml-[10%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/Heart.svg"
            alt="Left line"
          />
        </div>
        <div className="w-[35%] h-full relative mt-[4%]">
          <Image
            className="object-cover "
            fill
            src="/LandingPageImages/Testimonials/Crown.svg"
            alt="Left line"
          />
        </div>
      </div>
      {/* Image */}
      <div className="rounded-full border-2 border-[#fdfeff] md:w-[220px] md:h-[220px] h-[100px] w-[100px] lg:w-[250px] lg:h-[250px] mx-auto mt-[-1%] z-50 relative drop-sharow-2xl custom-shadow-white">
        {testimonials?.testimonialCards?.length ? <Image
          className="object-cover rounded-full  border-2 border-[#fdfeff] drop-sharow-2xl  "
          fill
          src={`${process.env.NEXT_PUBLIC_API_URL}${testimonials?.testimonialCards?.[selectedIndex]?.image?.data?.attributes?.url}`}
          alt="Left line"
        /> : null}
      </div>

      {/* Decoration */}
      <div className="flex flex-row  justify-between w-[100%] md:w-[90%] h-10 md:h-20 mx-auto md:mt-[-180px] mt-[-60px] pl-[10%]">
        <div className="w-[15%] h-full relative ">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/DecorLeft.svg"
            alt="Left line"
          />
        </div>
        <div className="w-[20%] h-full relative mt-[10%] md:mt-[8%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/DecorRight.svg"
            alt="Left line"
          />
        </div>
      </div>
      {/* Testimonial Box */}
      <div className="flex flex-row w-[83%] mx-auto h-36 md:h-48 lg:h-96 justify-between items-center  mt-[4%] md:mt-[10%] lg:mt-[7%] xl:mt-[5%]">
        <button className="w-[5%] h-[10%] relative" onClick={prevSelect}>
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/LeftArrow.svg"
            alt="Left line"
          />
        </button>
        <TestimonialBox testimonial={testimonials?.testimonialCards?.[selectedIndex]} />
        <button className="w-[5%] h-[10%] relative" onClick={nextSelect}>
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/RightArrow.svg"
            alt="Left line"
          />
        </button>
      </div>
      {/* Underline */}
      
      
    </section>
  );
}

export default Testimonials;