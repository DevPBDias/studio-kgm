import React from "react";
import Container from "../container/Container";
import CardTestimonial from "./CardTestimonial";
import TextTestimonials from "./TextTestimonials";
import { testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <Container>
      <section className="relative w-full 2xl:w-3/4 py-28 px-4 lg:px-16 flex flex-col justify-center items-center gap-12 lg:gap-24">
        <TextTestimonials />
        <div className="flex flex-row flex-wrap justify-center 2xl:justify-between items-center w-full gap-8 2xl:gap-0">
          {testimonials.map((data) => (
            <CardTestimonial key={data.id} testimonials={data} />
          ))}
        </div>
        <button className="font-bold w-full lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
          Vamos começar?
        </button>
      </section>
    </Container>
  );
};

export default Testimonials;
