import Image from "next/image";
import React from "react";
import MenuCard from "./MenuCard";
import type { MenuSection, MenuItem } from "@/types/custom-types";

type Props = {
  menuDetail: MenuSection;
};

function Menu({ menuDetail }: Props) {
  return (
    <section className="w-full" style={{ background: menuDetail?.backgroundColor || '#DEDEDE'  }}>
      {/* Menu Heading */}
      <div className="h-10 md:h-16 w-[70%] md:w-[60%] mx-auto flex flex-row mt-8 md:mt-0 justify-between items-center">
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
            className="object-contain"
            fill
            src="/LandingPageImages/Menu/LeftWing.svg"
            alt="Left line"
          />
        </div>
        <h1 className="blanch text-3xl lg:text-6xl text-black">
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

      <div className="flex flex-row w-[88%] mx-auto justify-center">
        <div className="h-24 lg:h-36 w-[9.5%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/DecoLeftMenu.svg"
            alt="Left line"
          />
        </div>
        <div className="w-full flex flex-wrap justify-center md:justify-between gap-10 md:gap-0">
          {menuDetail?.menuCards.map((menuItem: MenuItem) => (
            <MenuCard menuDetail={menuItem} key={menuItem.id} />
          ))}
        </div>

        <div className="h-24 lg:h-36 w-[9.5%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/DecoRightMenu.svg"
            alt="Left line"
          />
        </div>
      </div>

      <div className="h-20 lg:h-24 pt-[2%] xl:pt-[5%] w-[50%] xl:w-[30%] relative mx-auto">
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
