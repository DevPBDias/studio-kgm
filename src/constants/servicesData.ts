import { StaticImageData } from "next/image";
import developer from "@/assets/images/developing.png";
import design from "@/assets/images/design.png";
import uxui from "@/assets/images/uxui.png";
import seo from "@/assets/images/seo.png";
import suport from "@/assets/images/suport.png";

export interface IServices {
  id: number;
  name: string;
  description: string;
  icon: StaticImageData;
}

export const services: IServices[] = [
  {
    id: 1,
    name: "Desenvolvimento de Sites",
    description:
      "Cada site que criamos é mais do que uma página na web – é uma experiência digital única, feita sob medida para o seu negócio.",
    icon: developer,
  },
  {
    id: 2,
    name: "Design Gráfico",
    description:
      "A identidade visual da sua marca precisa se destacar. Criamos materiais gráficos que fortalecem sua comunicação e conectam você ao seu público.",
    icon: design,
  },
  {
    id: 3,
    name: "UI/UX Design",
    description:
      "Cada detalhe conta. Criamos interfaces que não apenas impressionam, mas encantam e convertem.",
    icon: uxui,
  },
  {
    id: 4,
    name: "Otimização de Sites",
    description:
      "Um site bonito precisa ser rápido, eficiente e fácil de encontrar.",
    icon: seo,
  },
  {
    id: 5,
    name: "Manutenção e Suporte",
    description:
      "Sua presença digital precisa estar sempre impecável. Cuidamos do seu site para que você foque no que realmente importa: o crescimento do seu negócio.",
    icon: suport,
  },
];
