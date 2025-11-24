import About from "@/components/about";
import InfiniteSliderHorizontal from "@/components/cases/InfinityCards";
import PortfolioSection from "@/components/cases/Portfolio";
import CTASection from "@/components/cta-section/CtaSection";
import DigitalPresenceSection from "@/components/digital-presence/DigitalPresence";
import FAQSection from "@/components/faq/FaqSection";
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
      <DigitalPresenceSection />
      <Services />
      <PortfolioSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
