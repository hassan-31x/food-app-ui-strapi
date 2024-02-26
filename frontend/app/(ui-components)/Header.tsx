import HeaderSocials from "./HeaderSocials";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

type Props = {
  logoUrl: string
};

function Header({ logoUrl }: Props) {
  return (
    <nav className="flex flex-row justify-between w-[83%] mx-auto mt-5 h-[2.66%] ">
     <HeaderSocials />
     <div className="w-[40%] h-full relative">
      <Image
        src={logoUrl}
        fill
        className="object-contain"
        alt="Main Logo"
      />
    </div>
     <HeaderMenu />
    </nav>
  );
}

export default Header;
