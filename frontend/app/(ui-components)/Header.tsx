import HeaderSocials from "./HeaderSocials";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
type Props = {};

function Header({}: Props) {
  return (
    <nav className="flex flex-row justify-between w-[83%] mx-auto mt-5 h-[2.66%] ">
     <HeaderSocials/>
     <HeaderLogo/>
     <HeaderMenu/>
    </nav>
  );
}

export default Header;
