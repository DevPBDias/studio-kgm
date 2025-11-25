import AboutText from "./Text";
import Title from "./Title";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 px-4 overflow-hidden mt-52"
      style={{ backgroundColor: "#0d060c" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13, 6, 12, 0.7), rgba(13, 6, 12, 0.9))",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span
                className="text-sm uppercase tracking-wider font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(224, 255, 79, 0.1)",
                  color: "#e0ff4f",
                }}
              >
                Sobre Nós
              </span>
            </div>

            <Title />
            <AboutText />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: "Design Moderno",
                description:
                  "Interfaces elegantes e intuitivas que encantam usuários",
              },
              {
                title: "Tecnologia Avançada",
                description:
                  "Soluções robustas com as melhores ferramentas do mercado",
              },
              {
                title: "Suporte Dedicado",
                description:
                  "Equipe sempre disponível para garantir seu sucesso",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl transition-all hover:scale-[1.02] cursor-pointer"
                style={{
                  backgroundColor: "rgba(42, 19, 38, 0.4)",
                  border: "1px solid rgba(224, 255, 79, 0.2)",
                }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 font-playfair"
                  style={{ color: "#e0ff4f" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "#f8f1f8", opacity: 0.8 }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
