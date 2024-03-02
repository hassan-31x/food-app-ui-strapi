import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import { type FormsSection } from "@/types/custom-types";
import { renderDynamicText } from "@/utils/renderDynamicText";

import "../curve.css";

type Props = {
  formDetail: FormsSection;
};

function FormSection({ formDetail }: Props) {
  return (
    <section className="h-[17%] w-full text-white flex flex-col gap-0 relative top-[-600px]">
      <div className="custom-shape-divider-bottom-1709375037 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={formDetail?.backgroundColor}
          ></path>
        </svg>
      </div>

      {/* FormSection Heading */}
      <div
        className="h-full w-full pt-5"
        style={{ background: formDetail?.backgroundColor }}
      >
        <div className="h-10 md:h-16 w-[70%] md:w-[60%] mx-auto flex flex-row mt-4 md:mt-12 lg:mt-24 justify-between items-center ">
          <div className="h-full w-[21%] relative">
            <Image
              className="object-contain "
              fill
              src="/LandingPageImages/FormSection/LeftLine.svg"
              alt="Left line"
            />
          </div>
          <div className="h-full w-[10%] relative">
            <Image
              className="object-contain "
              fill
              src="/LandingPageImages/FormSection/LeftWing.svg"
              alt="Left line"
            />
          </div>
          <h1 className="blanch text-xl md:text-3xl lg:text-7xl ">
            {formDetail?.sectionHeading}
          </h1>
          <div className="h-full w-[10%] relative">
            <Image
              className="object-contain "
              fill
              src="/LandingPageImages/FormSection/RightWing.svg"
              alt="Left line"
            />
          </div>
          <div className="h-full w-[21%] relative">
            <Image
              className="object-contain "
              fill
              src="/LandingPageImages/FormSection/RightLine.svg"
              alt="Left line"
            />
          </div>
        </div>
        {/* Intro Text */}

        <div className="w-[83%] md:w-[75%] h-[85%] mx-auto text-white text-start mt-[3%] flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[40%] h-full">
            <h1
              className="lg:text-8xl md:text-5xl text-[1.5rem] blanch w-full"
              style={{ lineHeight: "0.8" }}
            >
              {renderDynamicText(formDetail?.heading, { color: "#8bcda6" })}
            </h1>
            <p className="lg:text-sm md:text-xs text-xxss  mt-2 md:mt-6 w-full text-greyText font-medium">
              {formDetail?.description}{" "}
            </p>
            <div className="w-full h-36 relative mt-[4%]">
              <Image
                className="object-contain "
                fill
                src="/LandingPageImages/FormSection/Delivery.svg"
                alt="Delivery"
              />
            </div>
            <div className="w-full h-28 hidden lg:flex lg:justify-end ml-[40%] mt-[2%]">
              <div className="w-[50%] h-full relative z-50 ">
                <Image
                  className="object-contain "
                  fill
                  src="/LandingPageImages/FormSection/Arrow.svg"
                  alt="Hi"
                />
              </div>
            </div>
            <div className="w-full h-max flex flex-row justify-between">
              <div className="w-24 h-12 relative">
                <Image
                  className="object-contain "
                  fill
                  src="/LandingPageImages/FormSection/Hi.svg"
                  alt="Hi"
                />
              </div>
              <div className="lg:text-sm md:text-xs text-xxss flex flex-col gap-y-2">
                <h3 className="text-white font-bold h-5">
                  {formDetail?.address?.heading}
                </h3>
                <h3 className="text-greyText font-light h-5">
                  {formDetail?.address?.name}
                </h3>
                <h3 className="text-greyText font-light h-5">
                  {formDetail?.address?.address}
                </h3>
                <h3 className="text-greyText font-light h-5">
                  Email:{" "}
                  <Link
                    href={`mailto:${formDetail?.address?.email}`}
                    className="text-white underline"
                  >
                    {formDetail?.address?.email}{" "}
                  </Link>
                </h3>
                <h3 className="text-greyText font-light">
                  Tel: {formDetail?.address?.phone}
                </h3>
              </div>
            </div>
          </div>

          <Form
            formInputs={formDetail?.formInputs}
            cancelButton={formDetail?.cancelButton}
            submitButton={formDetail?.submitButton}
            terms={formDetail?.formTerms}
          />
        </div>
      </div>
    </section>
  );
}

export default FormSection;
