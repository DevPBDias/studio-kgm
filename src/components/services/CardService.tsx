import { IServices } from "@/constants/servicesData";
import Image from "next/image";

interface CardProps {
  service: IServices;
}

const CardService = ({ service }: CardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-4 p-6 w-80 h-80 bg-[var(--secondary)] rounded-xl">
        <Image src={service.icon} alt={service.name} className="" />
        <p className="text-[var(--primary)]">{service.description}</p>
      </div>
      <p className="text-[var(--secondary)] text-2xl font-semibold">
        {service.name}
      </p>
    </div>
  );
};

export default CardService;
