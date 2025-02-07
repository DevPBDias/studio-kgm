import { StaticImageData } from "next/image";
import ole from "@/assets/images/Logo.png";
import logoMax from "@/assets/images/logoMax.png";
import sandra from "@/assets/images/sandra.png";

export interface ITestimonials {
  id: number;
  name: string;
  image: StaticImageData;
  message: string;
}

export const testimonials: ITestimonials[] = [
  {
    id: 1,
    name: "Max Training",
    image: logoMax,
    message:
      "Profissionalismo e excelência! Meu site ficou incrível e já estou vendo resultados reais.",
  },
  {
    id: 2,
    name: "Sandra",
    image: sandra,

    message:
      "Desde o primeiro contato até o lançamento do site, o processo foi impecável. Recomendo de olhos fechados!",
  },
  {
    id: 3,
    name: "Olé Mídia",
    image: ole,
    message:
      "Agora minha marca tem um site moderno e profissional, que realmente transmite credibilidade.",
  },
];
