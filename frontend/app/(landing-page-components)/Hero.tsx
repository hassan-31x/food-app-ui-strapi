import Image from "next/image";
import HeroContent from "./HeroContent";
import Button from "../(ui-components)/Button";
import { getRgba } from "@/utils/convertColor";
import { type HeroSection } from "@/types/custom-types";

type Props = {
  heroDetail: HeroSection;
};

function Hero({ heroDetail }: Props) {
  const videoUrl = `${process.env.NEXT_PUBLIC_API_URL}${heroDetail?.video?.data?.attributes?.url}`;

  const { videoOverlayColor = 'rgb(28,27,33)' } = heroDetail
  const overlayColor = getRgba(videoOverlayColor)
  const backgroundStyle = `linear-gradient(90deg, ${overlayColor},1) 25%, ${overlayColor},0.93) 45%, ${overlayColor},0.9) 82%)`


  return (
    <section className="h-[10.3%] w-[90%] lg:w-[83%] mx-auto relative">
      <div className="w-full h-full absolute rounded-3xl top-0 left-0" style={{ clipPath: 'polygon(0 0, 83% 0, 38% 100%, 0% 100%)', background: backgroundStyle}}></div>
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
      <div
        className="absolute top-[82%] left-[65%] md:left-[70%] lg:left-[70%] w-[32%] lg:w-[28%] h-[11%] bg-white bg-opacity-[20%] text-start rounded-3xl flex flex-row items-center justify-between px-1 md:px-2"
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

      <div className="justify-end h-max flex w-[83%] mx-auto mt-8 gap-x-3 lg:gap-x-5 items-center md:mr-16">
        <h3 className="font-bold md:text-xs text-xxs">GOOGLE & FACEBOOK</h3>
        <div className="md:h-[20px] md:w-[120px] h-[10px] w-[60px] relative">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/Hero/Stars.svg"
            alt="Starts"
          />
        </div>
        <h3 className="font-bold md:text-xs text-xxs">200+ REVIEWS</h3>
      </div>
    </section>
  );
}

export default Hero;
