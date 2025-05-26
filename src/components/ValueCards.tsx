
import React from "react";

const VALUES = [
  {
    title: "Missão",
    description: "Oferecer produtos de qualidade, atendimento acolhedor e soluções inovadoras, promovendo o bem-estar dos clientes e contribuindo para o desenvolvimento do varejo regional."
  },
  {
    title: "Visão",
    description: "Ser referência em varejo na região, reconhecido pela excelência operacional, crescimento sustentável e geração de valor para clientes, parceiros e colaboradores."
  },
  {
    title: "Valores",
    description: "Ética, compromisso, respeito ao cliente, valorização das pessoas, transparência e responsabilidade social como bases do nosso dia a dia."
  },
];

const ValueCards: React.FC = () => {
  return (
    <section id="ethics" className="w-full max-w-6xl mx-auto py-6 sm:py-8 px-3 sm:px-4">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#282e76] mb-5 sm:mb-7 text-center tracking-tight">
        Missão, Visão e Valores
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {VALUES.map((v) => (
          <div
            key={v.title}
            className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-sm transition-all duration-200 group hover:shadow-lg hover:border-[#0d7c3d]"
          >
            <span className="text-base sm:text-lg font-bold text-[#282e76] mb-2">
              {v.title}
            </span>
            <hr className="w-6 sm:w-8 border-t-2 border-[#0d7c3d] mb-3 sm:mb-4" />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueCards;
