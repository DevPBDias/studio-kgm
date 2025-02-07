import heroImage from "@/assets/images/bghero.png";
import Image from "next/image";
import ContactText from "./ContactText";
import Footer from "../footer";

const Contact = () => {
  return (
    <main className="relative w-full h-screen flex flex-col justify-start items-center">
      <Image
        src={heroImage}
        alt=""
        className="cover w-full h-full rotate-180 absolute top-0 left-0"
      />
      <ContactText />
    </main>
  );
};

export default Contact;
