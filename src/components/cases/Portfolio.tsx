import { MoveRight } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { projects } from "@/constants/portfolioData";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 px-4 w-full"
      style={{ backgroundColor: "#0d060c" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(224, 255, 79, 0.1)",
                color: "#e0ff4f",
              }}
            >
              Portfólio
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-playfair"
              style={{ color: "#f8f1f8" }}
            >
              Projetos em <span style={{ color: "#e0ff4f" }}>Destaque</span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#f8f1f8", opacity: 0.7 }}
            >
              Conheça alguns dos projetos que desenvolvemos com excelência e
              dedicação
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index * 150}
            >
              <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500 w-full h-full"
                  />
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(to top, #0d060c 0%, rgba(13, 6, 12, 0.5) 50%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{
                      backgroundColor: "rgba(224, 255, 79, 0.2)",
                      color: "#e0ff4f",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-2 transition-colors font-playfair"
                    style={{ color: "#f8f1f8" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: "#f8f1f8", opacity: 0.7 }}
                  >
                    {project.description}
                  </p>
                  <Link
                    href={project.link || "#"}
                    className="flex items-center font-semibold group-hover:translate-x-2 transition-transform border-b border-transparent hover:border-[#e0ff4f] w-max"
                    style={{ color: "#e0ff4f" }}
                  >
                    Ver projeto
                    <MoveRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
