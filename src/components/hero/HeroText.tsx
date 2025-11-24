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
          <h1 className="sr-only">
            Criação de Sites Profissionais em Palmas-TO | KGM Studio - Agência
            Digital
          </h1>
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-playfair"
            words="Transforme Sua Presença Digital em Palmas e Todo o Brasil!"
          />
          <p
            className="text-center font-normal w-full md:w-4/5 font-crimson text-base md:text-lg leading-relaxed"
            style={{ color: "#f8f1f8", opacity: 0.9 }}
          >
            Agência digital especializada em criação de sites profissionais,
            landing pages de alta conversão e SEO. Atendemos empresas de{" "}
            <strong style={{ color: "#e0ff4f" }}>
              Palmas, Tocantins e todo o Brasil
            </strong>{" "}
            com soluções web que não apenas impressionam, mas geram resultados
            reais para o seu negócio.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
          <MagicBtn title="Quero agora!" link="https://w.app/2rdmwc" />
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
