import { type PhilosophySection } from "@/types/custom-types";
import Image from "next/image";
import Button from "../(ui-components)/Button";

type Props = {
  philDetail: PhilosophySection;
};

function Philosophy({ philDetail }: Props) {
  const coverPhoto = philDetail?.coverImage ? `${process.env.NEXT_PUBLIC_API_URL}${philDetail?.coverImage?.data?.attributes?.url}` : '/LandingPageImages/Philosophy/MainImage.svg'
  return (
    <section className="h-[13%] w-full mt-[4%] lg:mt-[6%] ">
      {/* Video Section */}
      <div className="h-[8%] w-[75%] md:w-[67%] mx-auto flex flex-row mt-3 md:mt-6 justify-between items-center">
        <div className="h-full w-[18%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftLine.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[8%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftWing.svg"
            alt="Left line"
          />
        </div>
        <h1 className="blanch text-xl md:text-3xl lg:text-6xl text-black">
          {philDetail?.heading}
        </h1>
        <div className="h-full w-[8%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightWing.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[18%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightLine.svg"
            alt="Left line"
          />
        </div>
      </div>
      {/* Image */}
      <div className="w-[83%] h-[40%] relative mt-[5%] mx-auto rounded-3xl">
        <Image
          className="object-cover rounded-3xl "
          fill
          src={coverPhoto}
          alt="Main Image"
        />
      </div>
      {/* Small boxes */}
      <div className="flex flex-row justify-between w-[75%] h-[35%] mx-auto mt-[-5%]">
        {philDetail?.cards?.map((card) => (

          <div className="bg-white rounded-2xl h-full w-[23%] border-2 border-[#DEDEDE] drop-shadow-2xl py-[3%] flex flex-col justify-between">
          <div className="h-[40%] w-[40%] relative mx-auto">
            <Image
              className="object-contain rounded-3xl "
              fill
              src={`${process.env.NEXT_PUBLIC_API_URL}${card?.image?.data?.attributes?.url}`}
              alt="Main Image"
              />
          </div>
          <h3 className="lg:text-4xl md:text-2xl text-lg mt-[3%] text-black blanch text-center">
            {card?.heading}
          </h3>
          <p className="lg:text-xs md:text-xxs text-xxss text-black text-center w-[90%] md:w-[70%] mx-auto mt-[3%]">
          {card?.description}
          </p>
        </div>
              ))}
      </div>
      <div className="mt-[3%] flex flex-row justify-center w-full">
        <Button buttonProps={philDetail?.button} />
      </div>
      <div className="h-[5%] w-[40%] mt-[3%] mx-auto relative">
        <Image
          className="object-contain "
          fill
          src="/LandingPageImages/Philosophy/Underline.svg"
          alt="Main Image"
        />
      </div>
    </section>
  );
}

export default Philosophy;