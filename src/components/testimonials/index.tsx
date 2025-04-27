import React from "react";
import Container from "../container/Container";
import TextTestimonials from "./TextTestimonials";
import { testimonials } from "@/constants/testimonials";
import Footer from "../footer";
import CardTestimonial from "./CardTestimonial";

const Testimonials = () => {
  return (
    <Container>
      <section
        id="testimonials"
        className="relative w-full 2xl:w-3/4 py-14 lg:py-28 px-4 lg:px-16 flex flex-col justify-center items-center gap-12 lg:gap-24"
      >
        <TextTestimonials />
        <section className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-6 lg:gap-12 w-full h-full">
          {testimonials.map((info, index) => (
            <CardTestimonial key={info.id} testimonials={info} />
          ))}
        </section>
        <Footer />
      </section>
    </Container>
  );
};

export default Testimonials;
