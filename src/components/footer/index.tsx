import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import MagicBtn from "../ui/MagicBtn";
import { ScrollReveal } from "../ui/ScrollReveal";
import gridBg from "@/assets/images/footer-grid.svg";
import { footerLinks, socialLinks } from "@/constants/footerLinks";

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 px-4 overflow-hidden w-full"
      id="contact"
      style={{ backgroundColor: "#0d060c" }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={gridBg}
          alt="Grid Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #0d060c 0%, transparent 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Section - CTA */}
        <ScrollReveal animation="fade-up">
          <div
            className="text-center mb-20 pb-20 border-b"
            style={{ borderColor: "rgba(224, 255, 79, 0.1)" }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(224, 255, 79, 0.1)",
                color: "#e0ff4f",
                border: "1px solid rgba(224, 255, 79, 0.2)",
              }}
            >
              Vamos Conversar
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#f8f1f8" }}
            >
              Quer destacar sua <span style={{ color: "#e0ff4f" }}>marca</span>{" "}
              no digital?
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: "#f8f1f8", opacity: 0.7 }}
            >
              Entre em contato e descubra como posso ajudar a levar seu projeto
              mais longe.
            </p>
            <div className="flex justify-center">
              <MagicBtn
                title="Vamos conversar?"
                icon={<ArrowUpRight className="w-5 h-5" />}
                position="right"
                link="https://w.app/2rdmwc"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Middle Section - Links & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 w-full">
          {/* Company Info */}
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="lg:col-span-2">
              <h3
                className="text-2xl font-bold mb-4 font-playfair"
                style={{ color: "#e0ff4f" }}
              >
                KGM Studio
              </h3>
              <p
                className="mb-6 leading-relaxed max-w-md text-base md:text-lg"
                style={{ color: "#f8f1f8", opacity: 0.8 }}
              >
                <strong>Agência digital em Palmas-TO</strong> especializada em
                criação de sites profissionais, landing pages e SEO.
                Transformamos ideias em experiências digitais que geram
                resultados para empresas de todo o Brasil.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:contato@studio.com"
                  className="flex items-center group transition-colors"
                  style={{ color: "#f8f1f8", opacity: 0.7 }}
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  devpbdias@gmail.com
                </a>
                <a
                  href="tel:+5563992310976"
                  className="flex items-center group transition-colors"
                  style={{ color: "#f8f1f8", opacity: 0.7 }}
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  +55 (63) 99231-0976
                </a>
                <div
                  className="flex items-center"
                  style={{ color: "#f8f1f8", opacity: 0.7 }}
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  Palmas, Tocantins
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <ScrollReveal
              key={title}
              animation="fade-up"
              delay={200 + index * 100}
            >
              <div>
                <h4 className="font-bold mb-4" style={{ color: "#f8f1f8" }}>
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block hover:translate-x-1 transform transition-all duration-200"
                        style={{ color: "#f8f1f8", opacity: 0.7 }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Section - Copyright & Social */}
        <ScrollReveal animation="fade-up" delay={500}>
          <div
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6"
            style={{ borderColor: "rgba(224, 255, 79, 0.1)" }}
          >
            <p
              className="text-sm text-center md:text-left"
              style={{ color: "#f8f1f8", opacity: 0.6 }}
            >
              © 2025 KGM Studio - Agência Digital em Palmas-TO. Todos os
              direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "rgba(42, 19, 38, 0.4)",
                    border: "1px solid rgba(224, 255, 79, 0.2)",
                    color: "#f8f1f8",
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
