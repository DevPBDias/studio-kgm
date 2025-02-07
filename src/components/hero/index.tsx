import Image from "next/image";
import heroImage from "@/assets/images/bghero.png";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <main className="relative w-full h-screen flex flex-col justify-start items-center">
      <Image
        src={heroImage}
        alt="hero image"
        className="cover w-full h-full absolute top-0 left-0"
      />
      <HeroText />
    </main>
  );
};

export default Hero;
