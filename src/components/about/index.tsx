import Container from "../container/Container";
import AboutText from "./Text";
import MagicBtn from "../ui/MagicBtn";
import Title from "./Title";

const About = () => {
  return (
    <Container>
      <section
        id="about"
        className="bg-[var(--primary)] w-full 2xl:w-3/4 mb-28 px-4 lg:px-16 flex flex-col justify-center items-center gap-6 2xl:gap-12 mt-96 py-6  rounded-lg shadow-md"
      >
        <Title />
        <AboutText />
        <MagicBtn title="Vamos começar?" />
      </section>
    </Container>
  );
};

export default About;
