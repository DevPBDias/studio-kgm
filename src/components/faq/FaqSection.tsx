"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { faqs } from "@/constants/faqData";
import MagicBtn from "../ui/MagicBtn";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 md:py-32 px-4"
      style={{ backgroundColor: "#0d060c" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-4">
              <span
                className="text-sm uppercase tracking-wider font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(224, 255, 79, 0.1)",
                  color: "#e0ff4f",
                }}
              >
                FAQ
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "#f8f1f8" }}
            >
              Perguntas{" "}
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e0ff4f]">
                frequentes
              </span>
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "#f8f1f8", opacity: 0.7 }}
            >
              Encontre respostas para as dúvidas mais comuns sobre nossos
              serviços
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: "rgba(42, 19, 38, 0.4)",
                  border:
                    openIndex === index
                      ? "1px solid rgba(224, 255, 79, 0.4)"
                      : "1px solid rgba(224, 255, 79, 0.1)",
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-start justify-between gap-4 text-left transition-all hover:bg-opacity-60"
                  style={{
                    backgroundColor:
                      openIndex === index
                        ? "rgba(224, 255, 79, 0.05)"
                        : "transparent",
                  }}
                >
                  <span
                    className="text-base sm:text-lg md:text-xl font-semibold pr-4 flex-1"
                    style={{
                      color: openIndex === index ? "#e0ff4f" : "#f8f1f8",
                    }}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className="flex-shrink-0 transition-transform duration-300 mt-1"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      color: openIndex === index ? "#e0ff4f" : "#f8f1f8",
                      opacity: openIndex === index ? 1 : 0.5,
                    }}
                    size={24}
                  />
                </button>

                {/* Answer Panel */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? "500px" : "0px",
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div
                    className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2"
                    style={{
                      color: "#f8f1f8",
                      opacity: 0.8,
                      borderTop:
                        openIndex === index
                          ? "1px solid rgba(224, 255, 79, 0.1)"
                          : "none",
                    }}
                  >
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Below FAQ */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div
            className="mt-12 md:mt-16 text-center p-8 md:p-12 rounded-2xl"
            style={{
              backgroundColor: "rgba(42, 19, 38, 0.3)",
              border: "1px solid rgba(224, 255, 79, 0.2)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#f8f1f8" }}
            >
              Ainda tem dúvidas?
            </h3>
            <p
              className="text-sm sm:text-base md:text-lg mb-6"
              style={{ color: "#f8f1f8", opacity: 0.7 }}
            >
              Entre em contato conosco e teremos prazer em ajudar
            </p>
            <MagicBtn
              title="Entre em contato"
              icon={<ArrowUpRight />}
              link="/contact"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
