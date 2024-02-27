import Image from "next/image";
import React from "react";

type Props = {};

function Company({}: Props) {
  return (
    <div className="h-[7%] w-full mx-auto">
      <h3 className="blanch text-black text-lg md:text-4xl lg:text-5xl w-[70%] mx-auto text-center mt-[3%] lg:mt-[5%] ">
        HEADLINER FÜR EINEN BEREICH DER NOCH MAL VERDEUTLICHT DAS BIS ZU 50k
        PERSONEN CATERINGS MÖGLICH SIND / inklusive LOGOTEPPICH/REZENSIOnen und
        c2a
      </h3>
      <div className="mt-[3%] flex flex-row justify-between h-[8%] w-[80%] mx-auto">
        <div className="h-full w-[24%] mx-auto relative mt-[3%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/CompanyLogo1.svg"
            alt="Underline"
          />
        </div>
        <div className="h-full w-[30%] mx-auto relative mt-[3%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/CompanyLogo2.svg"
            alt="Underline"
          />
        </div>
        <div className="h-full w-[18%] mx-auto relative mt-[3%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/CompanyLogo3.svg"
            alt="Underline"
          />
        </div>
        <div className="h-full w-[18%] mx-auto relative mt-[3%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Testimonials/CompanyLogo4.svg"
            alt="Underline"
          />
        </div>
      </div>
      <div className=" w-[50%] h-[5%] flex flex-row justify-center gap-x-[2%] items-center mx-auto mt-[5%] ">
        <h3 className="font-bold md:text-xxs text-xxss">GOOGLE & FACEBOOK</h3>
        <div className="w-[20%] h-full relative">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/Hero/Stars.svg"
            alt="Stars"
          />
        </div>
        <h3 className="font-bold md:text-xxs text-xxss">200+ REVIEWS</h3>
      </div>
      {/* Button */}
      <div className="mt-[3%] flex flex-row justify-center w-full">
        <button className="bg-primaryGreen text-white lg:text-sm md:text-xxs text-[0.2rem] px-3 py-1 md:px-4 md:py-2 rounded-3xl custom-shadow-green">
          FOODTRUCK BUCHEN
        </button>
      </div>
    </div>
  );
}

export default Company;