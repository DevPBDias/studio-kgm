import contact from "@/assets/images/contact.png";
import Image from "next/image";
import Footer from "../footer";

const ContactText = () => {
  return (
    <section className="absolute w-full 2xl:w-3/4 pt-24 px-4 lg:px-16 flex flex-col justify-center items-center gap-24">
      <h3 className="uppercase w-full">fale conosco</h3>
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-12 lg:gap-0">
        <Image src={contact} alt="footer image" className="md:w-1/2" />
        <div className="flex flex-col w-full md:w-1/2 justify-start items-start gap-12">
          <p className="text-lg">
            Tem um projeto em mente? Quer transformar sua presença digital e
            destacar sua marca no mercado? Estamos prontos para te ajudar!
            <br />
            <br />
            💬 Nos envie uma mensagem e vamos criar algo incrível juntos!
            <br />
            <br />
            📍 Atendimento Online – Projetos em qualquer lugar do Brasil e do
            mundo.
          </p>
          <button className="font-bold w-full lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
            Vamos conversar sobre o seu projeto!
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactText;
