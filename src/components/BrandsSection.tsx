
import React from "react";

const ALL_BRANDS = [
  {
    name: "BomQuéSó",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "RC+",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "RedeCompras.com",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 4",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 5",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 6",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 7",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 8",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 9",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 10",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
  {
    name: "Marca 11",
    logo: "/lovable-uploads/6ba9bec9-564a-4cf9-bb4f-ac2b93c87f96.png",
  },
];

// Controle fácil: altere este número para mostrar quantas marcas quiser (9-11)
const BRANDS_TO_SHOW = 9;

const BrandsSection = () => {
  const brands = ALL_BRANDS.slice(0, BRANDS_TO_SHOW);

  return (
    <section id="marcas" className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#282e76] mb-8 sm:mb-12">
          Nossas Marcas
        </h2>
        
        {/* Grid responsivo para as marcas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-2 sm:p-3 transition-transform duration-200 hover:scale-105"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-3 object-contain filter hover:brightness-110 transition-all"
              />
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-[#282e76] text-center leading-tight">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Texto explicativo opcional */}
        <p className="text-center text-gray-600 text-sm sm:text-base mt-8 sm:mt-10">
          Conheça todas as nossas marcas parceiras
        </p>
      </div>
    </section>
  );
};

export default BrandsSection;
