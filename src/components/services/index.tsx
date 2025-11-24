import Container from "../container/Container";
import { services } from "@/constants/servicesData";
import MagicBtn from "../ui/MagicBtn";
import Image from "next/image";

const Services = () => {
  return (
    <Container>
      <section
        id="services"
        className="relative w-full py-10 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#0d060c" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span
                className="text-sm uppercase tracking-wider font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(224, 255, 79, 0.1)",
                  color: "#e0ff4f",
                }}
              >
                Serviços
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-playfair"
              style={{ color: "#f8f1f8" }}
            >
              Nossos <span style={{ color: "#e0ff4f" }}>Serviços</span>
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#f8f1f8", opacity: 0.8 }}
            >
              Soluções digitais completas para empresas de{" "}
              <strong style={{ color: "#e0ff4f" }}>
                Palmas-TO e todo o Brasil
              </strong>
              . Da criação de sites profissionais à otimização para Google,
              transformamos sua presença online em resultados reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "16 / 9" }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13, 6, 12, 0.95), rgba(13, 6, 12, 0.7))",
                  }}
                />

                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 transition-colors duration-300 group-hover:opacity-100 font-playfair"
                    style={{ color: "#e0ff4f" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4"
                    style={{ color: "#f8f1f8", opacity: 0.9 }}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className="absolute top-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "#e0ff4f" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <MagicBtn title="Quero agora!" link="https://w.app/2rdmwc" />
        </div>
      </section>
    </Container>
  );
};

export default Services;
