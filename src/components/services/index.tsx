import Container from "../container/Container";
import { services } from "@/constants/servicesData";
import CardService from "./CardService";
import TextService from "./TextService";
import MagicBtn from "../ui/MagicBtn";

const Services = () => {
  return (
    <Container>
      <section
        id="services"
        className="relative w-full lg:px-16 py-14 lg:py-28 px-4 flex flex-col justify-center items-center gap-12 lg:gap-24"
      >
        <TextService />
        <div className="flex flex-row flex-wrap justify-center items-center w-full gap-6 lg:gap-12 2xl:w-3/4">
          {services.map((data) => (
            <CardService key={data.id} service={data} />
          ))}
        </div>
        <MagicBtn title="Vamos começar?" />
      </section>
    </Container>
  );
};

export default Services;
