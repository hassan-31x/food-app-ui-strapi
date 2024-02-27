import Image from "next/image";
import React from "react";

type Props = {
  heroHeading : string
  heroText: string
};

function HeroContent({ heroHeading, heroText }: Props) {

  const renderDynamicText = (text: string, styles: any) => {
    const segments = text.split(/(\~\~)/g);
    let opening = false;

    return (
      <>
        {segments.map((segment: string, index: number) => {
          if (segment == '~~' && !opening) {
            opening = true
            return null
          }
          if (segment == '~~' && opening) {
            opening = false
            return null
          }
          if (segments[index - 1] === '~~' && segments[index + 1] === '~~' && opening) {
            return (
              <span key={index} style={styles}>
                {segment}
              </span>
            );
          }

          return <React.Fragment key={index}>{segment}</React.Fragment>;
        })}
      </>
    );
  };

  return (
    <div className="absolute top-[10%] left-[5%] w-[60%]  text-white text-start">
      <h1 className="lg:text-8xl md:text-6xl blanch text-3xl" style={{ lineHeight: "0.8" }}>
        {renderDynamicText(heroHeading, { color: '#8bcda6'})}
      </h1>
      <p className="lg:text-sm md:text-xs text-xxss mt-6 w-[70%] text-[#999999]">
        {renderDynamicText(heroText, { color: '#ffffff'})}
      </p>
      <div className="relative h-[3rem] lg:h-[6rem] md:h-[5rem] w-[40%] mt-4">
        <Image
          className="object-cover"
          fill
          src="/LandingPageImages/Hero/FlyingEatery.svg"
          alt="Flying eatery"
        />
      </div>
      <div className="relative h-[6rem] lg:h-[12rem] md:h-[9rem] w-[50%]  left-[25%] z-50 mt-[-1rem] lg:mt-[-2rem]">
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