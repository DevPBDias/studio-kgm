import Container from "../container/Container";
import Gif from "./Gif";
import AboutText from "./Text";

const About = () => {
  return (
    <Container>
      <section className="w-full lg:w-3/4 pb-28 flex flex-row justify-center items-end gap-24">
        <AboutText />
        <Gif />
      </section>
    </Container>
  );
};

export default About;
