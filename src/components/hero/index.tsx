import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0" style={{ backgroundColor: "#0d060c" }}>
        <DottedGlowBackground
          gap={20}
          radius={2.5}
          color="rgba(42, 19, 38, 0.6)"
          glowColor="rgba(224, 255, 79, 0.5)"
          opacity={0.8}
          backgroundOpacity={0.1}
          speedMin={0.3}
          speedMax={0.8}
          speedScale={1.2}
        />
      </div>

      <HeroText />
    </section>
  );
}
