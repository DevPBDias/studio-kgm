const HeroText = () => {
  return (
    <section className="absolute z-10 gap-16 p-4 w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-[var(--secondary)] w-full text-center">
          Marcas fortes têm
          <strong className="text-[var(--terciary)]"> presença digital </strong>
          de alto nível!
        </h1>
        <h3 className="text-center font-normal opacity-75">
          Criamos sites com design sofisticado e moderno para fortalecer sua
          marca e impulsionar seus resultados.
        </h3>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <button className="font-bold w-full">Transforme sua marca agora</button>
        <button className="w-full bg-transparent border-2 border-[var(--terciary)] text-[var(--terciary)]">
          Conheça nossos trabalhos
        </button>
      </div>
    </section>
  );
};

export default HeroText;
