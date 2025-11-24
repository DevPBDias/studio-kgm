"use client";
import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Container>
      <section
        id="testimonials"
        className="relative w-full py-24 md:py-32 px-4 overflow-hidden lg:mt-16"
        style={{ backgroundColor: "#0d060c" }}
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(224, 255, 79, 0.4) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span
                className="text-sm uppercase tracking-wider font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(224, 255, 79, 0.1)",
                  color: "#e0ff4f",
                }}
              >
                Depoimentos
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-playfair"
              style={{ color: "#f8f1f8" }}
            >
              O Que Nossos{" "}
              <span style={{ color: "#e0ff4f" }}>Clientes Dizem</span>
            </h2>
          </div>

          <div className="relative">
            <div
              className="p-6 sm:p-8 md:p-12 rounded-3xl"
              style={{
                backgroundColor: "rgba(42, 19, 38, 0.4)",
                border: "1px solid rgba(224, 255, 79, 0.2)",
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                  style={{ color: "#e0ff4f", opacity: 0.5 }}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>

              <div className="min-h-[220px] sm:min-h-[180px] md:min-h-[140px]">
                <p
                  className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8"
                  style={{ color: "#f8f1f8" }}
                >
                  {testimonials[activeIndex].message}
                </p>

                <div>
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    width={40}
                    height={40}
                    className="w-12 h-12 rounded-full object-cover mb-4"
                  />
                  <h4
                    className="text-lg sm:text-xl font-bold font-playfair"
                    style={{ color: "#e0ff4f" }}
                  >
                    {testimonials[activeIndex].name}
                  </h4>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "#f8f1f8", opacity: 0.7 }}
                  >
                    {testimonials[activeIndex].name}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: activeIndex === index ? "40px" : "12px",
                    height: "12px",
                    backgroundColor:
                      activeIndex === index
                        ? "#e0ff4f"
                        : "rgba(248, 241, 248, 0.3)",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 sm:mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="p-5 sm:p-6 rounded-xl cursor-pointer transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor:
                    index === activeIndex
                      ? "rgba(224, 255, 79, 0.1)"
                      : "rgba(42, 19, 38, 0.2)",
                  border: `1px solid ${
                    index === activeIndex
                      ? "rgba(224, 255, 79, 0.3)"
                      : "rgba(224, 255, 79, 0.1)"
                  }`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-12 h-12 rounded-full object-cover mb-4"
                />
                <p
                  className="text-sm mb-3 line-clamp-2"
                  style={{ color: "#f8f1f8", opacity: 0.8 }}
                >
                  {testimonial.message}
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#e0ff4f" }}
                >
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
