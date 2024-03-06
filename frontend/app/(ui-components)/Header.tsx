import HeaderSocials from "./HeaderSocials";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

type Props = {
  navDetail: any;
};

function Header({ navDetail }: Props) {
  const logoUrl = navDetail?.image ? `${process.env.NEXT_PUBLIC_API_URL}${navDetail?.image?.data?.attributes?.url}` : '/LandingPageImages/Navbar/MainLogo.svg';
  return (
    <nav className="flex flex-row justify-between w-[83%] mx-auto mt-0 md:mt-5 lg:mt-10 h-[100px] md:h-[170px]">
      <HeaderSocials />
      <div className="w-[40%] lg:w-[25%] h-full relative">
        <Image src={logoUrl} fill className="object-contain" alt="Main Logo" />
      </div>
      <HeaderMenu />
    </nav>
  );
}

export default Header;
