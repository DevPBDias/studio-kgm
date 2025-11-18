import { StaticImageData } from "next/image";
import developer from "@/assets/services/development.jpg";
import design from "@/assets/services/design.jpg";
import seo from "@/assets/services/seo.jpg";
import suport from "@/assets/services/suport.jpg";

export interface IServices {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
}

export const services: IServices[] = [
  {
    id: 1,
    name: "Desenvolvimento de Sites",
    description:
      "Cada site que criamos é mais do que uma página na web – é uma experiência digital única, feita sob medida para o seu negócio.",
    image: developer,
  },
  {
    id: 2,
    name: "Design Gráfico",
    description:
      "A identidade visual da sua marca precisa se destacar. Criamos materiais gráficos que fortalecem sua comunicação e conectam você ao seu público.",
    image: design,
  },
  {
    id: 4,
    name: "Otimização de Sites",
    description:
      "Um site bonito precisa ser rápido, eficiente e fácil de encontrar.",
    image: seo,
  },
  {
    id: 5,
    name: "Manutenção e Suporte",
    description:
      "Sua presença digital precisa estar sempre impecável. Cuidamos do seu site para que você foque no que realmente importa: o crescimento do seu negócio.",
    image: suport,
  },
];
