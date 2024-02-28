import Image from "next/image";
import React from "react";
import MenuCard from "./MenuCard";
import type { MenuSection, MenuItem } from "@/types/custom-types";


type Props = {
    menuDetail : MenuSection
};

function Menu({ menuDetail }: Props) {
  return (
    <section className="h-[11.5%] w-full">
      {/* Menu Heading */}
      <div className="h-[8%] w-[70%] md:w-[60%] mx-auto flex flex-row mt-8 md:mt-16 justify-between items-center">
        <div className="h-full w-[21%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftLine.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[10%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftWing.svg"
            alt="Left line"
          />
        </div>
        <h1 className="blanch text-xl md:text-3xl lg:text-6xl text-black">
          {menuDetail?.heading}
        </h1>
        <div className="h-full w-[10%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightWing.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[21%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightLine.svg"
            alt="Left line"
          />
        </div>
      </div>

      {/* Menu Cards */}

      <div className="flex flex-row h-[80%] w-[88%] mx-auto justify-center">
        <div className="h-[26%] w-[9.5%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/DecoLeftMenu.svg"
            alt="Left line"
          />
        </div>
        {menuDetail?.menuCards.map((menuItem: MenuItem, index: number) => (
          <MenuCard
            key={menuItem?.id} 
            name={menuItem.heading}
            image={menuItem.image?.data?.attributes?.url}
            description={menuItem.description}
            link={menuItem.heading}
            menuNumber={index} 
          />
        ))}

        <div className="h-[26%] w-[9.5%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/DecoRightMenu.svg"
            alt="Left line"
          />
        </div>
      </div>

      <div className="h-[2%] mt-[2%] xl:mt-[5%]  w-[50%] relative mx-auto">
        <Image
          className="object-contain "
          fill
          src="/LandingPageImages/Menu/SectionUnderline.svg"
          alt="Left line"
        />
      </div>
    </section>
  );
}

export default Menu;