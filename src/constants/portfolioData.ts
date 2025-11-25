import { StaticImageData } from "next/image";
import ftbImage from "@/assets/cases/ftbwebsite.png";
import oleImage from "@/assets/cases/olemidia.png";
import tripImage from "@/assets/cases/trip-agency.png";
import petshopImage from "@/assets/cases/pet-shop.png";

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
  {
    id: 3,
    title: "Agência de Viagens",
    category: "Web Design & Development",
    image: tripImage,
    description: "Site institucional para agência de viagens",
    link: "https://trip-agency-brown.vercel.app",
  },
  {
    id: 4,
    title: "Pet Shop Online",
    category: "Landing Page",
    image: petshopImage,
    description: "Landing page para pet shops e promover seus serviços",
    link: "https://pet-shop-model.vercel.app",
  },
];
