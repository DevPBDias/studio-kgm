import Container from "../container/Container";
import { services } from "@/constants/servicesData";
import CardService from "./CardService";
import TextService from "./TextService";
import CircleAbst from "./CircleAbst";

const Services = () => {
  return (
    <Container>
      <section className="relative w-full lg:px-16 2xl:w-3/4 py-14 lg:py-28 px-4 flex flex-col justify-center items-center gap-12 lg:gap-24">
        <TextService />
        <div className="flex flex-row flex-wrap justify-center items-center w-full gap-6 lg:gap-12">
          {services.map((data) => (
            <CardService key={data.id} service={data} />
          ))}
        </div>
        <button className="font-bold w-full lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
          Vamos começar?
        </button>
        <CircleAbst />
      </section>
    </Container>
  );
};

export default Services;
