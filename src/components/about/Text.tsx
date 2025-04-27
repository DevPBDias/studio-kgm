import Image from "next/image";
import img from "@/assets/images/about-img.jpg";

const AboutText = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-9 lg:gap-24">
      <p className="font-normal w-full">
        NA Agência KGM, acreditamos que grandes marcas não se constroem apenas
        com presença online. Elas se destacam pela experiência que proporcionam.
        <br />
        <br />
        Criamos sites modernos e estrategicamente pensados para transformar sua
        presença digital em um verdadeiro diferencial competitivo. Unimos design
        sofisticado, performance de alta qualidade e estratégias focadas em
        conversão para entregar projetos que cativam, conectam e impulsionam
        resultados reais.
        <br />
        <br />
        Cada detalhe do seu site é projetado para refletir a essência da sua
        marca e posicioná-la onde ela merece estar: à frente.
        <br />
        <br />
        🚀 Se você busca mais do que um site, busca impacto — nós somos o
        parceiro certo para essa jornada.
      </p>
      <picture className="w-full h-full">
        <Image
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </picture>
    </div>
  );
};

export default AboutText;
