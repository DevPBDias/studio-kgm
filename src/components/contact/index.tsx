import heroImage from "@/assets/images/bghero.png";
import Image from "next/image";
import ContactText from "./ContactText";

const Contact = () => {
  return (
    <main className="relative w-full flex flex-col justify-start items-center">
      <Image
        src={heroImage}
        alt=""
        className="hidden cover w-full h-full rotate-180 2xl:absolute top-0 left-0"
      />
      <ContactText />
    </main>
  );
};

export default Contact;
