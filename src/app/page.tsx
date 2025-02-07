import About from "@/components/about";
import CasesWork from "@/components/cases";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <CasesWork />
      <Testimonials />
      <Contact />
    </main>
  );
}
