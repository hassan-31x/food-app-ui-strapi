import Image from "next/image";
import { type AboutUsSection } from "@/types/custom-types";
import Button from "../(ui-components)/Button";
import '../curve.css'

type Props = {
    aboutUsProps: AboutUsSection;
};

function AboutSection({ aboutUsProps }: Props) {
  return (
    <section className="w-full relative" style={{ background: aboutUsProps?.backgroundColor || '#8bcda6' }}>

      <div className="custom-shape-divider-bottom-1709382700 absolute top-[-200px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill={aboutUsProps?.backgroundColor || '#8bcda6'}></path>
          </svg>
      </div>

      <div className="h-10 md:h-16 w-[90%] md:w-[60%] mx-auto flex flex-row mt-3 md:mt-6 justify-between items-center z-[100]">
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
        <h1 className="blanch text-4xl md:text-5xl lg:text-6xl text-black text-center z-[100]">
          {aboutUsProps.heading}
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
      <div className="w-full h-[450px] flex flex-row justify-center relative">
        <div className="h-[30%] w-[20%] absolute left-[7%] top-[20%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/VideoSection/Bus.svg"
            alt="Left line"
          />
        </div>
        <iframe
          className="w-[60%]  mx-auto rounded-2xl shadow-lg object-cover mt-[2%] z-50"
          src={aboutUsProps.youtubeVideoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="h-[15%] w-[15%] absolute right-[8%] top-[50%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/VideoSection/QuestionMark.svg"
            alt="Left line"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-[3%] mt-[3%] z-[100]">
        <Button buttonProps={aboutUsProps.leftButton} />
        <Button buttonProps={aboutUsProps?.rightButton} />
      </div>

      <div className="custom-shape-divider-bottom-1709382700 !bottom-[-8%]" style={{ transform: 'rotateY(180deg)' }}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill={'#fff'}></path>
          </svg>
      </div>
    </section>
  );
}

export default AboutSection;