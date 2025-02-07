import logo from "@/assets/images/KGM Studio.png";
import { navLinks } from "@/constants/navLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center gap-4 w-full">
      <section className="flex flex-row justify-between items-center gap-4 w-full">
        <div className="flex flex-col justify-start items-start gap-0">
          <Image src={logo} alt="" className="h-8 w-32 lg:h-16 lg:w-64" />
          <p className="ml-4 text-lg italic font-semibold">
            Transforme Sua Ideia em Realidade Digital
          </p>
        </div>
        <nav
          className={`hidden lg:flex flex-row gap-6 justify-center items-center`}
        >
          {navLinks.map((item) => (
            <a
              key={item.id}
              className="hover:text-[var(--terciary)] text-lg last:border-2 last:hidden"
              href={`${item.path}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </section>
      <span className="text-xs">
        © 2024 KGM Studio. Todos direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
