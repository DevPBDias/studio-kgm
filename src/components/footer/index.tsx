import { socialMedia } from "@/constants/socialMedia";
import gridFooter from "@/assets/images/footer-grid.svg";
import Image from "next/image";
import MagicBtn from "@/components/ui/MagicBtn";
import { ArrowUpRightIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src={gridFooter}
          alt="grid"
          className="w-full h-1/2 opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="md:text-center md:w-3/4">
          Quer destacar sua
          <span className="text-[var(--terciary)]"> marca </span>no digital?
          Vamos juntos para o próximo nível!
        </h3>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato e descubra como posso ajudar a levar seu projeto mais
          longe.
        </p>
        <MagicBtn
          title="Vamos conversar?"
          icon={<ArrowUpRightIcon />}
          position="right"
        />
      </div>
      <div className="flex flex-col-reverse gap-3 mt-16 md:flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 DevPBDias
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-105"
            >
              <Image src={info.icon} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
