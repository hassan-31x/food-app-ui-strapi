import Image from "next/image";
import React from "react";

type Props = {};

function Form({}: Props) {
  return (
    <div className="w-[45%] h-[94%] bg-[#101828] bg-opacity-5 shadow-xl drop-shadow-2xl custom-shadow-black rounded-3xl border-2 border-[#2e2e2e]">
      <div className="w-full h-[80%] bg-transparent rounded-t-3xl pt-[5%]  ">
        {/* Numbers */}
        <div className="flex flex-row justify-between mx-[5%]  h-[20%]">
          <div className="w-[20%] h-full">
            <div className="h-[80%] relative">
              <Image
                fill
                className="object-contain mt-[5%] md:mt-[-10%]"
                src="/LandingPageImages/FormSection/CircleNumber.svg"
                alt="Circle"
              />
              <h1 className="blanch text-primaryGreen font-bold md:text-5xl text-2xl lg:text-6xl text-center">
                01
              </h1>
            </div>
            <h3 className="text-white font-bold text-center  mt-[7%] md:mt-0 lg:text-sm md:text-xs text-xxss">
              KONTAKT
            </h3>
          </div>
          <div className="h-full w-[10%] relative">
            <Image
              fill
              className="object-contain mt-[-10%]"
              src="/LandingPageImages/FormSection/LineNumber.svg"
              alt="Circle"
            />
          </div>
          <div>
            <h1 className="blanch text-white font-bold md:text-5xl text-2xl lg:text-6xl text-center mt-[2%] ">
              02
            </h1>
            <h3 className="text-white font-bold text-center mt-[7%]  md:mt-[22%] lg:mt-[24%] xl:mt-[30%] lg:text-sm md:text-xs text-xxss">
              MENÜWAHL
            </h3>
          </div>
          <div className="h-full w-[10%] relative">
            <Image
              fill
              className="object-contain mt-[-10%]"
              src="/LandingPageImages/FormSection/LineNumber.svg"
              alt="Circle"
            />
          </div>
          <div>
            <h1 className="blanch text-white font-bold md:text-5xl text-2xl lg:text-6xl text-center mt-[2%] ">
              03
            </h1>
            <h3 className="text-white font-bold text-center mt-[8%] lg:mt-[24%]  md:mt-[22%] xl:mt-[30%] lg:text-sm md:text-xs text-xxss">
              AB DAFÜR!
            </h3>
          </div>
        </div>

        {/* Seperating Line */}
        <div className="w-[90%] mx-auto h-[2%] relative my-[2%]">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/FormSection/LinesForm.svg"
            alt="Form Line"
          />
        </div>

        {/* Input Feilds */}
        <div className="flex flex-row flex-wrap w-[90%] mx-auto mt-[5%] md:mt-[10%]  justify-between">
          <div className="w-[48%]">
            <h3 className="text-white font-light lg:text-xs md:text-xxs text-xxss ml-2">
              Name*
            </h3>
            <input
              placeholder="Max Mustermann"
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
            />
          </div>
          <div className="w-[48%]">
            <h3 className="text-white font-light lg:text-xs md:text-xxs text-xxss ml-2">
              Firma*
            </h3>
            <input
              placeholder="Firmenname hier..."
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
            />
          </div>
          <div className="w-[48%] mt-[8%]">
            <h3 className="text-white font-light lg:text-xs md:text-xxs text-xxss ml-2">
              Email*
            </h3>
            <input
              placeholder="abc@Mail.com"
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
            />
          </div>
          <div className="w-[48%] mt-[8%]">
            <h3 className="text-white font-light lg:text-xs md:text-xxs text-xxss ml-2">
              Veranstaltungsort*
            </h3>
            <input
              placeholder="Ortsangabe der Location..."
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
            />
          </div>
          <div className="w-[48%] mt-[8%]">
            <h3 className="text-white font-light lg:text-xs md:text-xxs text-xxss ml-2">
              Date*
            </h3>
            <input
              placeholder="TT.MM.JJJJ"
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
            />
          </div>
          <div className="w-[48%] mt-[8%]">
            <h3 className="text-white font-light lg:text-xs md:text-xxs text-xxss ml-2">
              Gästeanzahl*
            </h3>
            <input
              placeholder="ca.."
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
            />
          </div>
        </div>
        {/* Seperating Line */}
        <div className="w-[90%] mx-auto h-[2%] relative mt-[5%] md:mt-[10%]">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/FormSection/LinesForm.svg"
            alt="Form Line"
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full h-[20%] bg-[#141319] rounded-b-3xl    bg-opacity-95 ">
        <h3 className="pt-[6%] text-white  lg:text-xs md:text-xxs text-xxss text-center px-[5%]">
          Lorem ipsum dolor sit amet consectetur. Quam diam imperdiet augue mi
          et purus etiam. Vel libero rhoncus purus lobortis gravida nisl
        </h3>
        <div className="flex flex-row justify-center gap-x-[5%] mt-[3%]">
            <button className="border-white border-[1px] rounded-3xl md:py-2 md:px-4 py-1 px-2 text-white bg-transparent  lg:text-xs md:text-xxs text-xxss font-bold">FRAGEN?</button>
            <button className="bg-primaryGreen rounded-3xl md:py-2 md:px-4 py-1 px-2 text-white   lg:text-xs md:text-xxs text-xxss font-bold">WEITER</button>
        </div>
      </div>
    </div>
  );
}

export default Form;