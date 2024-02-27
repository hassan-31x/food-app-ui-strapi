import Image from "next/image";
import React from "react";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";

type Props = {
  heroVideo: any;
  heroText: string;
  heroHeading: string;
};

function Hero({ heroVideo, heroText, heroHeading }: Props) {
  console.log("Hero video", heroVideo);
  const assetRef = heroVideo.asset._ref; // Get the asset reference
  const assetId = assetRef.split("-")[1]; // Extract the ID from the reference

  // Concatenate the ID with your Sanity project ID and the production URL pattern // Replace with your actual Sanity project ID
//   const videoUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${assetId}.mp4`;

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
          src={'https://www.youtube.com/watch?v=RceLeh9D85o'}
          type="video/mp4"
          className="w-full h-full rounded-3xl"
        />
        Your browser does not support the video tag.
      </video>
      <HeroContent heroText={heroText} heroHeading={heroHeading} />
      <HeroButtons />
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