import Image from "next/image";
import React from "react";

type Props = {
    menuNumber: number
    image : any
    name : string
    link : string
    description : string
};

function MenuCard({menuNumber,image,name,link,description}: Props) {
    const menuNum = menuNumber % 4
    let shadowClass;
    let bgColor;
    switch (menuNum) {
        case 1:
          shadowClass = "custom-shadow-menu1";
          bgColor = "bg-[#FFAA05]";
          break;
        case 2:
          shadowClass = "custom-shadow-menu2";
          bgColor = "bg-[#8BCDA6]";
          break;
        case 3:
          shadowClass = "custom-shadow-menu3";
          bgColor = "bg-[#FF5C00]";
          break;
        default:
          shadowClass = "custom-shadow-menu0"; // Provide a default shadow class if menuNum doesn't match any case
          bgColor = "bg-[#69841A]"; // Provide a default background color
          break;
      }
  return (
    <>
      <div className="w-[26%] lg:w-[23%] h-[100%] md:mr-4 lg:mr-6 mr-2 ">
        <div className="w-full h-[40%] lg:h-[50%] relative z-50">
          <Image
            className="object-cover "
            fill
            src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
            alt="Left line"
          />
        </div>
        <div className="w-full h-[70%] mt-[-35%] bg-white border rounded-2xl text-black flex flex-col items-center justify-center px-[5%]">
          <h3 className="blanch md:text-2xl lg:text-4xl text-lg mt-[10%] text-center h-[20%] md:h-[15%] flex items-center justify-center"  style={{ lineHeight: "0.8" }}>
            {name}
          </h3>
          <h5
            className="lg:text-xs md:text-xxs text-xxss mt-[10%] text-center"
          >
           {description}
          </h5>
          <div className="w-full h-5 relative mt-[5%] md:mt-[10%]">
            <Image
              className="object-cover "
              fill
              src="/LandingPageImages/Menu/MenuLine.svg"
              alt="Left line"
            />
          </div>
          <button className={`${bgColor} ${shadowClass}  text-white font-bold md:text-xxs lg:text-xs text-xxss mt-[10%] px-2 py-1 md:px-4 md:py-2 lg:py-3 rounded-3xl  drop-shadow-2xl`}>
            MENU ANZEIGEN
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuCard;