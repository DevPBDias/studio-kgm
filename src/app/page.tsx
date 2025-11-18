import About from "@/components/about";
import InfiniteSliderHorizontal from "@/components/cases/InfinityCards";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MobileMenu from "@/components/ui/MobileMenu";
import { navLinks } from "@/constants/navLinks";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <MobileMenu />
      <FloatingNav className="hidden md:flex" navItems={navLinks} />
      <Hero />
      <InfiniteSliderHorizontal />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
