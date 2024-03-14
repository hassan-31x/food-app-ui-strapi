import { renderDynamicText } from "@/utils/renderDynamicText";
import Image from "next/image";

type Props = {
  heroHeading : string
  heroText: string
};

function HeroContent({ heroHeading, heroText }: Props) {
  return (
    <div className="absolute top-[10%] left-[5%] w-[60%] text-white text-start">
      <h1 className="xl:text-9xl md:text-6xl lg:text-7xl blanch text-4xl" style={{ lineHeight: "0.8" }}>
        {renderDynamicText(heroHeading, { color: '#8bcda6'})}
      </h1>
      <p className="lg:text-sm md:text-xs text-xxs leading-[12px] md:leading-[15px] lg:leading-5 mt-2 md:mt-6 w-[60%] text-[#999999]">
        {renderDynamicText(heroText, { color: '#ffffff' })}
      </p>
      <div className="relative h-[3rem] xl:h-[8rem] md:h-[5rem] w-[40%] mt-4">
        <Image
          className="object-cover"
          fill
          src="/LandingPageImages/Hero/FlyingEatery.svg"
          alt="Flying eatery"
        />
      </div>
      <div className="relative h-16 md:h-24 lg:h-36 xl:h-[15rem] w-[50%] left-[25%] xl:left-[10%] xl:top-[80px] z-50 mt-[-1rem] lg:mt-[-2rem]">
        <Image
          className="object-contain"
          fill
          src="/LandingPageImages/Hero/WingsBus.svg"
          alt="Bus"
        />
      </div>
    </div>
  );
}

export default HeroContent;