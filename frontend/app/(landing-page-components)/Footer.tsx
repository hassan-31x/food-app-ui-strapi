import Image from "next/image";

import "../curve.css";
import Button from "../(ui-components)/Button";

type Props = {};

type ButtonPropTypes = {
  color: string;
  hasGlow: boolean;
  text: string;
  variant: "FILLED" | "TRANSPARENT";
};

function Footer({}: Props) {
  const buttonProps: ButtonPropTypes = {
    color: "#fff",
    hasGlow: false,
    text: "Sitemap 01",
    variant: "FILLED",
  };

  return (
    <div className="h-[1.5%] w-full flex justify-center md:pb-12 pt-10 relative">
      <div className="custom-shape-divider-bottom-1709749424">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-32 md:h-64 lg:h-96 xl:h-[550px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#8BCDA6"
          ></path>
        </svg>
      </div>

      <div className="h-full flex flex-row justify-between w-[83%] mx-auto items-center mt-[20%] xl:mt-[12%]">
        <div className="h-10 md:h-16 lg:h-20 w-[13%] relative">
          <Image
            fill
            className="object-contain"
            src="/LandingPageImages/Footer/Logo.svg"
            alt="Logo"
          />
        </div>
        <div className="xl:w-[50%] w-[60%] items-center flex flex-row justify-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <Button
              buttonProps={{ ...buttonProps, id: index }}
              customClass="!text-[#8BCDA6]"
            />
          ))}
        </div>
        <div className="w-[10%] h-10 md:h-16 lg:h-20 flex flex-row justify-between">
          <div className="w-[26%] h-full relative">
            <Image
              src="/LandingPageImages/Footer/Facebook.svg"
              fill
              className="object-contain"
              alt="Facebook"
            />
          </div>
          <div className="w-[26%] h-full relative">
            <Image
              src="/LandingPageImages/Footer/Twitter.svg"
              fill
              className="object-contain"
              alt="Twitter"
            />
          </div>
          <div className="w-[26%] h-full relative">
            <Image
              src="/LandingPageImages/Footer/Instagram.svg"
              fill
              className="object-contain"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
