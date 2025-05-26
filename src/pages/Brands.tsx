
import Navbar from "@/components/Navbar";
import PartnersSlider from "@/components/PartnersSlider";
import Footer from "@/components/Footer";
import React from "react";

const BRANDS = [
  { name: "BomQuéSó", logo: "https://redecompras.com.br/wp-content/uploads/2021/05/bomqueso-color.png" },
  { name: "RC+", logo: "https://redecompras.com.br/wp-content/uploads/2021/05/icone-rcplus-color.png" },
  { name: "RedeCompras.com", logo: "https://redecompras.com.br/wp-content/uploads/2021/05/icone-ecommerce-color.png" },
];

const Brands = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-7">Nossas Marcas</h2>
        <div className="flex flex-wrap justify-center gap-10 animate-fade-in">
          {BRANDS.map(b => (
            <div key={b.name} className="flex flex-col items-center">
              <img src={b.logo} alt={b.name} className="h-20 w-auto mb-2 drop-shadow" />
              <span className="font-medium text-gray-800">{b.name}</span>
            </div>
          ))}
        </div>
      </section>
      <PartnersSlider />
    </main>
    <Footer />
  </div>
);

export default Brands;
