import About from "@/components/about";
import Cases from "@/components/cases";
import { Hero } from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navLinks } from "@/constants/navLinks";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav className="hidden md:flex" navItems={navLinks} />
      <Hero />
      <Cases />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
