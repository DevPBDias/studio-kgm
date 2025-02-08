import logo from "@/assets/images/KGM Studio.png";
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-end gap-14 lg:gap-0 w-full py-4">
      <div className="flex flex-col items-center justify-start md:items-start gap-0">
        <Image src={logo} alt="" className="h-10 w-40 lg:h-16 lg:w-64" />
        <p className="ml-4 text-lg italic font-semibold">
          Transforme Sua Ideia em Realidade Digital
        </p>
      </div>
      <span className="text-xs">
        © 2024 KGM Studio. Todos direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
