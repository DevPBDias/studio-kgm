import logo from "@/assets/images/KGM Studio.png";
import Burger from "./Burger";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed z-30 top-5 left-0 px-4 w-full flex flex-row justify-between items-center">
      <Image src={logo} alt="" className="h-10 w-40 -ml-3" />
      <Burger />
    </header>
  );
};

export default Header;
