import Image from "next/image";
import { ITestimonials } from "@/constants/testimonials";
import quote from "@/assets/images/Quote.png";

interface CardProps {
  testimonials: ITestimonials;
}

const CardTestimonial = ({ testimonials }: CardProps) => {
  return (
    <div className="flex flex-row justify-center items-start gap-3">
      <Image
        src={testimonials.image}
        alt="quote icon"
        className="w-20 h-20 rounded-full p-1 object-cover border border-[var(--secondary)]"
      />
      <div className="flex flex-col justify-start items-start gap-6 p-6 w-80 h-80 bg-[var(--secondary)] rounded-xl shadow-sm shadow-[var(--terciary)] hover:scale-105">
        <Image src={quote} alt="quote icon" className="" />
        <p className="text-[var(--primary)] text-lg">{testimonials.message}</p>
        <p className="text-[var(--primary)] text-xl font-bold">
          {testimonials.name}
        </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
