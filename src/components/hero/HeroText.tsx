import MagicBtn from "../ui/MagicBtn";
import { TextGenerateEffect } from "../ui/TextEffect";

const HeroText = () => {
  return (
    <section
      id="hero"
      className="absolute z-10 w-full h-full px-4 2xl:w-3/4 flex flex-col justify-between items-center"
    >
      <section className="w-full h-full flex flex-col justify-center items-center md:w-2/3 2xl:w-1/2 gap-9">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl"
            words="Marcas fortes têm presença digital de alto nível!"
          />
          <h4 className="text-center font-normal opacity-75 w-full md:w-3/4">
            Criamos sites com design sofisticado e moderno para fortalecer sua
            marca e impulsionar seus resultados.
          </h4>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
          <MagicBtn title="Quero agora!" link="" />
          <MagicBtn title="Explorar site" link="" />
        </div>
      </section>
    </section>
  );
};

export default HeroText;
