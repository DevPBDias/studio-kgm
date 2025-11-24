import React from "react";

function Title() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:text-left text-center">
      <h2
        className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold"
        style={{ color: "#f8f1f8" }}
      >
        Agência Digital em{" "}
        <span className="text-[var(--terciary)]">Palmas-TO</span> que Gera{" "}
        <span className="text-[var(--terciary)]">Resultados Reais</span>
      </h2>
    </div>
  );
}

export default Title;
