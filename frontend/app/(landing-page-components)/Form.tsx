import Image from "next/image";
import type { Button, Input } from "@/types/custom-types";
import Button from "../(ui-components)/Button";

type Props = {
  formInputs: Input[];
  cancelButton: Button;
  submitButton: Button;
  terms: string;
};

function Form({ formInputs, cancelButton, submitButton, terms }: Props) {
  return (
    <div className="w-[45%] h-[800px] bg-opacity-5 shadow-xl drop-shadow-2xl custom-shadow-black rounded-3xl border-2 border-[#2e2e2e]">
      <div className="w-full h-[80%] bg-transparent rounded-t-3xl pt-[5%]  ">
        {/* Numbers */}
        <div className="flex flex-row justify-between mx-[5%]  h-[20%]">
          <div className="w-[20%] h-full">
            <div className="h-[80%] relative">
              <h1 className="blanch text-primaryGreen font-bold md:text-6xl text-4xl lg:text-7xl text-center">
                01
              </h1>
              <Image
                fill
                className="absolute !top-[-10%]"
                src="/LandingPageImages/FormSection/CircleNumber.svg"
                alt="Circle"
              />
            </div>
            <h3 className="text-white font-bold text-center  mt-[7%] md:mt-1 lg:text-sm md:text-xs text-xxss">
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
            <h1 className="blanch text-white font-bold md:text-6xl text-4xl lg:text-7xl text-center mt-[2%] ">
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
            <h1 className="blanch text-white font-bold md:text-6xl text-4xl lg:text-7xl text-center mt-[2%] ">
              03
            </h1>
            <h3 className="text-white font-bold text-center mt-[8%] lg:mt-[24%]  md:mt-[22%] xl:mt-[30%] lg:text-sm md:text-xs text-xxss">
              AB DAFÜR!
            </h3>
          </div>
        </div>

        {/* Seperating Line */}
        <div className="w-[90%] mx-auto h-[2%] relative my-10">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/FormSection/LinesForm.svg"
            alt="Form Line"
          />
        </div>

        {/* Input Feilds */}
        <div className="flex flex-row flex-wrap w-[90%] mx-auto mt-10 md:mt-12 justify-between">
          {formInputs.map((input, index) => (

            <div className={`w-[48%] ${index>1 ? 'mt-8' : ''}`} key={input?.id}>
            <h4 className="text-white font-light lg:text-xs md:text-xxs text-xxss">
              {input?.label}{input?.compulsory ? '*' : ''}
            </h4>
            <input
              placeholder={input?.placeholder}
              type={input?.type}
              className="px-2 outline-[#5E5E5E] bg-[#4A494F] border-[1px] border-[#5E5E5E] w-full md:py-[0.4rem] py-1  lg:text-sm md:text-xs text-xxss rounded-3xl md:mt-2 mt-1"
              />
          </div>
              ))}
        </div>
        {/* Seperating Line */}
        <div className="w-[90%] mx-auto h-[2%] relative mt-10 md:mt-16">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/FormSection/LinesForm.svg"
            alt="Form Line"
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full h-[20%] bg-[#141319] flex flex-col justify-center items-center rounded-b-3xl bg-opacity-95 ">
        <h3 className=" text-white lg:text-xs md:text-xxs text-xxss text-center px-[5%]">
          {terms}
        </h3>
        <div className="flex flex-row justify-center gap-x-[5%] mt-[3%]">
            <Button buttonProps={cancelButton} />
            <Button buttonProps={submitButton} />
        </div>
      </div>
    </div>
  );
}

export default Form;