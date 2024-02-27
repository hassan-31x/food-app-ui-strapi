import Image from "next/image";

type Props = {};

function HeaderSocials({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-[10%] h-full">
      <div className="flex flex-row w-full h-[31.25%] justify-between">
        <div className="w-[26%] h-full relative">
          <Image
            src="/LandingPageImages/Navbar/Facebook.svg"
            fill
            className="object-contain"
            alt="Facebook"
          />
        </div>
        <div className="w-[26%] h-full relative">
          <Image
            src="/LandingPageImages/Navbar/Twitter.svg"
            fill
            className="object-contain"
            alt="Twitter"
          />
        </div>
        <div className="w-[26%] h-full relative">
          <Image
            src="/LandingPageImages/Navbar/Instagram.svg"
            fill
            className="object-contain"
            alt="Instagram"
          />
        </div>
      </div>
      <div className="w-full h-[12.5%] relative">
        <Image
          src="/LandingPageImages/Navbar/SocialsUnderline.svg"
          fill
          className="object-contain"
          alt="Underline"
        />
      </div>
    </div>
  );
}

export default HeaderSocials;
