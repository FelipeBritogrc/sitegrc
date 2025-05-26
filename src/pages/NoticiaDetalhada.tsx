
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const NEWS = [
  {
    id: "1",
    title: "Nova Loja Inaugurada em Manaíra",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    summary: "A RedeCompras celebrou a inauguração da nova unidade em Manaíra, trazendo ofertas e oportunidades para toda a comunidade.",
    content: "A RedeCompras celebrou a inauguração da nova unidade em Manaíra, João Pessoa. O evento trouxe ofertas exclusivas, atrações para clientes e a presença de parceiros estratégicos. O novo espaço conta com tecnologias inovadoras, amplos corredores e área de saudabilidade, além de promover vagas de emprego para a comunidade local. Visite-nos e confira o novo conceito RedeCompras em Manaíra!",
    date: "22/05/2024"
  },
  {
    id: "2",
    title: "Corrida Saudável reuniu mais de 800 participantes",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    summary: "Evento promovido pelo Grupo RedeCompras em apoio à saúde e bem-estar de funcionários e clientes.",
    content: "A tradicional Corrida Saudável, promovida pelo Grupo RedeCompras, superou expectativas ao reunir mais de 800 participantes neste ano. O evento incentivou hábitos saudáveis, promoveu integração e contou com parcerias especiais para distribuição de brindes. Funcionários, fornecedores e clientes participaram juntos dessa iniciativa que já entrou para o calendário da cidade!",
    date: "12/03/2024"
  },
  {
    id: "3",
    title: "Campanha do Alimento bate recorde de arrecadação",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    summary: "Solidariedade e colaboração marcaram a campanha deste ano. Confira os resultados!",
    content: "A Campanha do Alimento 2023 da RedeCompras foi um sucesso e bateu recorde de arrecadação com mais de 10 toneladas doadas. Os itens foram distribuídos a instituições e famílias em situação de vulnerabilidade. Agradecemos o apoio de clientes e parceiros nesse gesto de solidariedade!",
    date: "28/07/2023"
  }
];

const NoticiaDetalhada = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticia = NEWS.find(item => item.id === id);

  if (!noticia) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col justify-center items-center">
          <div className="text-center mt-24">
            <h2 className="text-2xl font-semibold text-[#2545B8] mb-2">Notícia não encontrada</h2>
            <button onClick={() => navigate('/newsletter')} className="text-[#2545B8] font-semibold mt-2 hover:underline">
              Voltar para Newsletter
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="max-w-2xl mx-auto bg-white rounded-xl shadow px-6 py-8 mt-10 mb-8">
          <img src={noticia.img} alt={noticia.title} className="w-full h-56 object-cover rounded mb-6" />
          <span className="text-xs text-gray-500 mb-3 block">{noticia.date}</span>
          <h1 className="text-3xl font-bold text-[#2545B8] mb-4">{noticia.title}</h1>
          <p className="text-lg text-gray-800 mb-6">{noticia.content}</p>
          <button onClick={() => navigate('/newsletter')} className="text-[#2545B8] font-semibold mt-2 hover:underline">
            ← Voltar para Newsletter
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhada;
