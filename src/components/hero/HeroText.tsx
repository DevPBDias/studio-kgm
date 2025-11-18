import { ArrowBigDown } from "lucide-react";
import MagicBtn from "../ui/MagicBtn";
import { TextGenerateEffect } from "../ui/TextEffect";

const HeroText = () => {
  return (
    <section
      id="hero"
      className="relative z-10 w-full px-4 2xl:w-3/4 flex flex-col justify-center items-center"
    >
      <section className="w-full flex flex-col justify-center items-center md:w-2/3 2xl:w-1/2 gap-9">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
            words="Marcas fortes têm presença digital de alto nível!"
          />
          <h5 className="text-center font-normal w-full md:w-4/5">
            Sites com design sofisticado e moderno que não apenas impressionam,
            mas também impulsionam seus resultados e fortalecem sua marca.
          </h5>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
          <MagicBtn title="Quero agora!" link="" />
          <MagicBtn
            title="Explorar site"
            link="#about"
            icon={<ArrowBigDown size={18} color="#e0ff4f" />}
            position="right"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroText;
