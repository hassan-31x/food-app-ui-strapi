import HeaderSocials from "./HeaderSocials";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

type Props = {
  navDetail: any;
};

function Header({ navDetail }: Props) {
  const logoUrl = navDetail?.image ? `${process.env.NEXT_PUBLIC_API_URL}${navDetail?.image?.data?.attributes?.url}` : '/LandingPageImages/Navbar/MainLogo.svg';
  return (
    <nav className="flex flex-row justify-between w-[83%] mx-auto mt-5 h-[2.66%] ">
      <HeaderSocials />
      <div className="w-[40%] h-full relative">
        <Image src={logoUrl} fill className="object-contain" alt="Main Logo" />
      </div>
      <HeaderMenu />
    </nav>
  );
}

export default Header;
