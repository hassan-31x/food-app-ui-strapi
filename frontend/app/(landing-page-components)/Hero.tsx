import Image from "next/image";
import HeroContent from "./HeroContent";
import Button from "../(ui-components)/Button";
import { getRgba } from "@/utils/convertColor";
import { type HeroSection } from "@/types/custom-types";
import "./curve.css";

type Props = {
  heroDetail: HeroSection;
};

function Hero({ heroDetail }: Props) {
  const videoUrl = `${process.env.NEXT_PUBLIC_API_URL}${heroDetail?.video?.data?.attributes?.url}`;

  const { videoOverlayColor = "rgb(28,27,33)" } = heroDetail;
  const overlayColor = getRgba(videoOverlayColor);
  const overlayStyle = `linear-gradient(90deg, ${overlayColor},1) 25%, ${overlayColor},0.93) 45%, ${overlayColor},0.9) 82%)`;

  return (
    // <section className="w-full pt-[2.66%] pb-48" style={{ background: "url(/heroBlob.svg) no-repeat", backgroundSize: 'contain', backgroundPosition: '50% 0%' }}>
    <section className="w-full pt-[2.66%] pb-36 relative bg-[#FDFDFD]">
      <div className="custom-shape-divider-bottom-1709363450 bg-transparent">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="w-[90%] h-[650px] lg:w-[83%] mx-auto relative">
      <div className="w-full h-full absolute rounded-3xl top-0 left-0" style={{ clipPath: 'polygon(0 0, 83% 0, 38% 100%, 0% 100%)', background: overlayStyle }}></div>
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
      <div className="absolute top-[82%] left-[65%] md:left-[70%] lg:left-[70%] w-[32%] lg:w-[28%] h-[11%] bg-white bg-opacity-[20%] text-start rounded-3xl flex flex-row items-center justify-between px-1 md:px-2"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <Button buttonProps={heroDetail?.leftButton} />
        <Button buttonProps={heroDetail?.rightButton} />
      </div>
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
          alt="Arrow down"
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
      </div>
      {/* <div className="h-[600px]"></div> */}
    </section>
  );
}

export default Hero;
