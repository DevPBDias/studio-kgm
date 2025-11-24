import { StaticImageData } from "next/image";
import ftbImage from "@/assets/cases/ftbwebsite.png";
import oleImage from "@/assets/cases/olemidia.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  link?: string;
}

export const projects = [
  {
    id: 1,
    title: "Olé Mídia",
    category: "Landing Page",
    image: oleImage,
    description: "Website moderno para personal trainer com foco em conversão",
    link: "https://olemidia.com.br",
  },
  {
    id: 2,
    title: "Federação Tocantinense de Basketball",
    category: "Web Design & Development",
    image: ftbImage,
    description:
      "Plataforma completa para gestão de campeonatos e site institucional",
    link: "https://ftb-platform.vercel.app",
  },
];
