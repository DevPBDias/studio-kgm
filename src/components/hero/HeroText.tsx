import Header from "../header";

const HeroText = () => {
  return (
    <section className="absolute z-10 w-full h-full lg:w-3/4 flex flex-col justify-between items-center">
      <Header />
      <section className="w-full h-full flex flex-col justify-center items-center md:w-2/3 lg:w-1/2 lg:gap-9">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-[var(--secondary)] w-full text-center">
            Marcas fortes têm
            <strong className="text-[var(--terciary)]">
              {" "}
              presença digital{" "}
            </strong>
            de alto nível!
          </h1>
          <h4 className="text-center font-normal opacity-75 w-full md:w-3/4">
            Criamos sites com design sofisticado e moderno para fortalecer sua
            marca e impulsionar seus resultados.
          </h4>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
          <button className="font-bold w-full lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
            Transforme sua marca agora
          </button>
          <button className="w-full lg:w-fit bg-transparent border-2 border-[var(--terciary)] text-[var(--terciary)] hover:bg-[var(--terciary)] hover:text-[var(--primary)]">
            Conheça nossos trabalhos
          </button>
        </div>
      </section>
    </section>
  );
};

export default HeroText;
