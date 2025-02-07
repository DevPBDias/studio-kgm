import Container from "../container/Container";
import Image from "next/image";
import ole from "@/assets/images/ole.png";
import max from "@/assets/images/max.png";
import ftb from "@/assets/images/ftb.png";
import arrow from "@/assets/images/arrow.png";
import circleAbst from "@/assets/images/circleWhite.png";

const CasesWork = () => {
  return (
    <Container>
      <section className="w-full lg:w-3/4 py-28 flex flex-col justify-center items-start gap-24">
        <h3 className="uppercase">cases de sucesso</h3>
        <section className="w-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-row w-full justify-start items-start gap-3">
            <Image
              src={ole}
              alt="olemidia website"
              className="w-[500px] h-80 object-cover hover:scale-105"
            />
            <p className="mt-2 border-2 border-[var(--secondary)] px-3 py-1 rounded-xl hover:bg-[var(--secondary)] hover:text-[var(--primary)] font-bold w-96">
              Sites modernos e personalizados, projetados para fortalecer
              marcas.
            </p>
            <Image
              src={circleAbst}
              alt="abstract circle"
              className="animate-[spin_8s_ease_infinite] ml-auto"
            />
          </div>
          <div className="w-full flex flex-row-reverse justify-between items-end gap-3">
            <div className="flex flex-col justify-center items-end gap-3">
              <Image src={max} alt="max website" className="hover:scale-105" />
              <p className="w-80 mr-2 border-2 border-[var(--secondary)] px-3 py-1 rounded-xl hover:bg-[var(--secondary)] hover:text-[var(--primary)] font-bold">
                Experiências intuitivas, que encantam usuários e aumentam
                conversões.
              </p>
            </div>
            <div className="ml-52 flex flex-row  justify-center items-end gap-3">
              <Image
                src={ftb}
                alt="ftb post"
                className="-mb-3 hover:scale-105"
              />
              <p className="w-80 border-2 border-[var(--secondary)] px-3 py-1 rounded-xl hover:bg-[var(--secondary)] hover:text-[var(--primary)] font-bold">
                Designs gráficos impactantes, criados para destacar sua
                comunicação.
              </p>
            </div>
          </div>
          <div className="absolute w-96 flex flex-col justify-center items-center p-6">
            <div className="w-full flex justify-start items-start">
              <Image src={arrow} alt="arrow " className="" />
            </div>
            <h4 className="w-full  flex justify-center items-center">
              O que você
              <br />
              encontrará aqui?
            </h4>
            <div className="w-full flex justify-between items-center">
              <Image
                src={arrow}
                alt="arrow down left "
                className="rotate-180 transform -scale-x-100"
              />
              <Image
                src={arrow}
                alt="arrow down right"
                className="rotate-180"
              />
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center items-center">
          <button className="font-bold w-full lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
            Eleve seu sucesso agora!
          </button>
        </div>
      </section>
    </Container>
  );
};

export default CasesWork;
