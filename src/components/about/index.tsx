import Container from "../container/Container";
import Gif from "./Gif";
import AboutText from "./Text";

const About = () => {
  return (
    <Container>
      <section className="w-full 2xl:w-3/4 pb-28 px-4 lg:px-16 flex flex-col lg:flex-row justify-center items-center gap-6 2xl:gap-24">
        <AboutText />
        <Gif />
        <button className="font-bold w-full flex justify-center items-center lg:hidden lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
          Vamos começar?
        </button>
      </section>
    </Container>
  );
};

export default About;
