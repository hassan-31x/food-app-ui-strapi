import { testimonialCard } from "@/types/custom-types";
import Image from "next/image";
import React from "react";

type Testimonial = {
    testimonial: testimonialCard
}

function TestimonialBox({ testimonial }: Testimonial) {
    const backgroundUrl = "/LandingPageImages/Testimonials/Box.svg";
    const { name, position, review, stars } = testimonial;
  return (
    <main
      className="bg-transparent bg-center bg-no-repeat bg-contain  w-[82%]  h-full "
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="lg:w-[30%] h-[30%] w-[15%] md:w-[20%] relative mt-[-7%] ml-[5%]">
        <Image
          className="object-contain "
          fill
          src="/LandingPageImages/Testimonials/Colon.svg"
          alt="Colon"
        />
      </div>
      <h3 className="mt-[5%] lg:text-base md:text-sm text-[#1b1b1b] text-[12px] leading-[12px] md:leading-[20px] text-center font-light w-[80%] mx-auto">
       {review}
      </h3>
      <h3 className="mt-[3%] lg:text-lg md:text-base text-sm text-[#1b1b1b] text-center font-bold w-[60%] mx-auto">
       {name}
      </h3>
      <h3 className=" lg:text-sm text-xs text-[#1b1b1b] text-center font-light w-[60%] mx-auto">
       {position}
      </h3>

      <div
        className={`flex flex-row h-[8%] w-[20%] mx-auto justify-between mt-[1%]`}
      >
        {Array.from({ length: stars }, (_, index) => (
          <div key={index} className="h-full w-[18%] relative">
            <Image
              className="object-contain"
              fill
              src="/LandingPageImages/Testimonials/Star.svg"
              alt="Filled Star"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default TestimonialBox;