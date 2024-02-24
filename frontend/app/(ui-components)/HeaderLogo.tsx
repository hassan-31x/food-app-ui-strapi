import Image from "next/image";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <div className="w-[40%] h-full relative">
      <Image
        src="/LandingPageImages/Navbar/MainLogo.svg"
        fill
        className="object-contain"
        alt="Main Logo"
      />
    </div>
  );
};

export default HeaderLogo;