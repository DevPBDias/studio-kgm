"use client";

import { benefits, stats } from "@/constants/digitalStats";
import { ScrollReveal } from "../ui/ScrollReveal";
import MagicBtn from "../ui/MagicBtn";
import { ArrowUpRight } from "lucide-react";

export default function DigitalPresenceSection() {
  return (
    <section
      className="relative w-full py-24 md:py-32 px-4 overflow-hidden"
      style={{ backgroundColor: "#0d060c" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e0ff4f 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-6">
              <span
                className="text-sm uppercase tracking-wider font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(224, 255, 79, 0.1)",
                  color: "#e0ff4f",
                }}
              >
                Presença Digital
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
              style={{ color: "#f8f1f8" }}
            >
              Por que seu negócio{" "}
              <span className="text-[#e0ff4f] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                precisa de um site?
              </span>
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-pretty"
              style={{ color: "#f8f1f8", opacity: 0.8 }}
            >
              No mundo digital de hoje, não ter um site é como não existir.
              Descubra como uma presença online profissional pode transformar
              seu negócio.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(42, 19, 38, 0.5)",
                  border: "1px solid rgba(224, 255, 79, 0.1)",
                }}
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: "#e0ff4f" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: "#f8f1f8", opacity: 0.8 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div
                  className="group p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{
                    backgroundColor: "rgba(42, 19, 38, 0.5)",
                    border: "1px solid rgba(224, 255, 79, 0.1)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(224, 255, 79, 0.1)",
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "#e0ff4f" }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: "#f8f1f8" }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "#f8f1f8", opacity: 0.8 }}
                  >
                    {benefit.description}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className="mt-6 w-0 h-1 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ backgroundColor: "#e0ff4f" }}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Call to Action */}
        <ScrollReveal animation="zoom-in" delay={300}>
          <div
            className="mt-16 md:mt-20 text-center p-8 sm:p-12 rounded-2xl"
            style={{
              backgroundColor: "rgba(224, 255, 79, 0.05)",
              border: "2px solid rgba(224, 255, 79, 0.2)",
            }}
          >
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#f8f1f8" }}
            >
              Pronto para{" "}
              <span style={{ color: "#e0ff4f" }}>
                Transformar Sua Presença Digital?
              </span>
            </h3>
            <p
              className="text-base sm:text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: "#f8f1f8", opacity: 0.8 }}
            >
              Não deixe sua empresa ficar para trás. Invista em uma presença
              online profissional e colha os resultados.
            </p>
            <MagicBtn title="Agende consulta" icon={<ArrowUpRight />} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
