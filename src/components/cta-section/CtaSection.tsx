import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import MagicBtn from "../ui/MagicBtn";

export default function CTASection() {
  return (
    <section
      className="relative py-32 px-4 overflow-hidden w-full"
      style={{ backgroundColor: "#0d060c" }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(42, 19, 38, 0.3) 0%, transparent 50%, rgba(42, 19, 38, 0.3) 100%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(224, 255, 79, 0.05)" }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Main Content */}
        <ScrollReveal animation="fade-up">
          <div className="mb-12">
            <h2
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: "#f8f1f8" }}
            >
              Pronto para transformar sua{" "}
              <span className="relative" style={{ color: "#e0ff4f" }}>
                visão
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C40 2.5 80 1.5 120 2.5C160 3.5 180 5 199 6.5"
                    stroke="#e0ff4f"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              em realidade?
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#f8f1f8", opacity: 0.7 }}
            >
              Vamos criar algo incrível juntos. Entre em contato e descubra como
              podemos elevar seu projeto para o próximo nível.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Projetos Entregues" },
            { number: "100%", label: "Satisfação" },
            { number: "24/7", label: "Suporte" },
            { number: "5+", label: "Anos de Experiência" },
          ].map((stat, index) => (
            <ScrollReveal
              key={index}
              animation="zoom-in"
              delay={200 + index * 100}
            >
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: "#e0ff4f" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm md:text-base"
                  style={{ color: "#f8f1f8", opacity: 0.6 }}
                >
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="flex justify-center">
            <MagicBtn
              title="Iniciar Projeto"
              icon={<ArrowUpRight className="w-5 h-5" />}
              position="right"
              link="#contact"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
