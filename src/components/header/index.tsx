import logo from "@/assets/images/KGM Studio.png";
import Burger from "./Burger";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center">
      <Image
        src={logo}
        alt=""
        className="h-10 w-40 lg:h-14 lg:w-60 2xl:h-20 2xl:w-80"
      />
      <Navbar />
      <Burger />
    </header>
  );
};

export default Header;
