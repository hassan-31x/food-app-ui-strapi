import Image from "next/image";
import HeroContent from "./HeroContent";
import Button from "../(ui-components)/Button";

type Props = {
  heroDetail: any;
};

function Hero({ heroDetail }: Props) {
  const videoUrl = `${process.env.NEXT_PUBLIC_API_URL}${heroDetail?.video?.data?.attributes?.url}`;

  return (
    <section className="h-[10.3%] w-[83%] mx-auto relative">
      <Image
        className=" object-cover rounded-3xl"
        fill
        src="/LandingPageImages/Hero/BackgroundOverlay.svg"
        alt="Overlay"
      />
      <video
        muted
        loop
        controls
        autoPlay
        className="w-full h-full rounded-[2rem]  shadow-lg object-cover"
      >
        <source
          src={videoUrl}
          type="video/mp4"
          className="w-full h-full rounded-3xl"
        />
        Your browser does not support the video tag.
      </video>
      <HeroContent
        heroHeading={heroDetail?.title}
        heroText={heroDetail?.description}
      />
      {/* <HeroButtons /> */}
      <div
        className="absolute top-[82%] left-[65%] md:left-[70%]  lg:left-[70%] w-[32%] lg:w-[28%] h-[11%] bg-white bg-opacity-[20%] text-start rounded-3xl flex flex-row items-center justify-between px-1 md:px-2"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <Button buttonProps={heroDetail?.leftButton} />
        <Button buttonProps={heroDetail?.rightButton} />
      </div>
      {/* Green Arrow */}
      <div className="absolute top-[60%] left-[90%] w-[15%] h-[25%]">
        <Image
          fill
          className=""
          src="/LandingPageImages/Hero/GreenArrow.svg"
          alt="Green arrow"
        />
      </div>
      <div className="absolute top-[95%] left-[50%] w-[20%] h-[20%]">
        <Image
          fill
          className="object-fill"
          src="/LandingPageImages/Hero/ArrowDown.svg"
          alt="Green arrow"
        />
      </div>
    </section>
  );
}

export default Hero;
