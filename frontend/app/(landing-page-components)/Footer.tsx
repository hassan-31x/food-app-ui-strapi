import Image from "next/image";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="h-[1.5%] flex flex-row justify-between w-[83%] mx-auto items-center mt-[20%] xl:mt-[12%]">
      <div className="h-full w-[16%] relative">
        <Image
          fill
          className="object-contain"
          src="/LandingPageImages/Footer/Logo.svg"
          alt="Logo"
        />
      </div>
      <div className="xl:w-[50%] w-[60%] items-center flex flex-row justify-between">
        <button className="px-1 md:px-2 py-1 lg:py-2 lg:px-4 text-xxss md:text-xs lg:text-sm rounded-2xl bg-white text-primaryGreen">
          Sitemap 01
        </button>
        <button className="px-1 md:px-2 py-1 lg:py-2 lg:px-4 text-xxss md:text-xs lg:text-sm rounded-2xl bg-white text-primaryGreen">
          Sitemap 01
        </button>
        <button className="px-1 md:px-2 py-1 lg:py-2 lg:px-4 text-xxss md:text-xs lg:text-sm rounded-2xl bg-white text-primaryGreen">
          Sitemap 01
        </button>
        <button className="px-1 md:px-2 py-1 lg:py-2 lg:px-4 text-xxss md:text-xs lg:text-sm rounded-2xl bg-white text-primaryGreen">
          Sitemap 01
        </button>
      </div>
      <div className="w-[11%] h-full flex flex-row justify-between">
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
  );
}

export default Footer;