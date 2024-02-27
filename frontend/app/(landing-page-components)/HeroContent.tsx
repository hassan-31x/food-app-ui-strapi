import Image from "next/image";

type Props = {
  heroText: string
  heroHeading : string
};

function HeroContent({heroText,heroHeading}: Props) {
  return (
    <div className="absolute top-[10%] left-[5%] w-[60%]  text-white text-start">
      <h1 className="lg:text-8xl md:text-6xl blanch text-3xl" style={{ lineHeight: "0.8" }}>
        Das <span className="text-primaryGreen">Foodtruck Catering</span> mit
        den Flügeln
      </h1>
      <p className="lg:text-sm md:text-xs text-xxss mt-6 w-[70%] text-[#999999]">
        Ob{" "}
        <span className="text-white">
          Firmenveranstaltung, Events, Festivals, private Feiern
        </span>{" "}
        und <span className="text-white">Hochzeiten</span>: Die
        Bordsteinschwalbe fliegt zu euch und versorgt euch aus unseren{" "}
        <span className="text-white"> kultigen 69er-Retro-Anhängern</span>
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