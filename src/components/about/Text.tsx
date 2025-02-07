const AboutText = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-9 lg:gap-16">
      <h3 className="uppercase">Nosso Estúdio</h3>
      <p className="text-lg">
        Somos um estúdio especializado no desenvolvimento de sites modernos e
        designs estratégicos que elevam marcas e geram resultados reais.
        <br />
        <br />
        Acreditamos que um site não deve ser apenas bonito, mas também
        funcional, intuitivo e preparado para converter visitantes em clientes.
        Combinamos tecnologia, design e estratégia para criar soluções
        personalizadas que atendem às necessidades de cada negócio.
        <br />
        <br />
        Nosso compromisso é entregar sites profissionais, rápidos e otimizados,
        garantindo que sua marca tenha uma presença digital forte e competitiva.
        <br />
        <br />
        🚀 Vamos levar seu negócio para o próximo nível?
      </p>
      <button className="font-bold w-full lg:w-fit shadow-md shadow-[var(--terciary)] hover:bg-[var(--primary)] hover:text-[var(--terciary)] border-2 border-[var(--terciary)]">
        Vamos começar?
      </button>
    </div>
  );
};

export default AboutText;
