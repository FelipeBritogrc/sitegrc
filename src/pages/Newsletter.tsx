
import Navbar from "@/components/Navbar";
import BannerCarousel from "@/components/BannerCarousel";
import Footer from "@/components/Footer";
import React from "react";
import CardNoticia from "@/components/CardNoticia";

// IDs e conteúdo atualizado para integração correta com rota dinâmica
const NEWS = [
  {
    id: "1",
    title: "Nova Loja Inaugurada em Manaíra",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    summary: "A RedeCompras celebrou a inauguração da nova unidade em Manaíra, trazendo ofertas e oportunidades para toda a comunidade.",
    date: "22/05/2024"
  },
  {
    id: "2",
    title: "Corrida Saudável reuniu mais de 800 participantes",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    summary: "Evento promovido pelo Grupo RedeCompras em apoio à saúde e bem-estar de funcionários e clientes.",
    date: "12/03/2024"
  },
  {
    id: "3",
    title: "Campanha do Alimento bate recorde de arrecadação",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    summary: "Solidariedade e colaboração marcaram a campanha deste ano. Confira os resultados!",
    date: "28/07/2023"
  }
];

const Newsletter = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16">
      <BannerCarousel />
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Notícias & Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((noticia) => (
            <CardNoticia
              key={noticia.id}
              id={noticia.id}
              title={noticia.title}
              img={noticia.img}
              summary={noticia.summary}
              date={noticia.date}
            />
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Newsletter;
