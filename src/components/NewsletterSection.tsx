
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NEWS = [
  {
    id: "1",
    title: "21 Anos de História",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Celebrando mais de duas décadas de crescimento e inovação no varejo.",
    date: "15/03/2024"
  },
  {
    id: "2",
    title: "RedeCompras no Ranking ABRAS",
    img: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Grupo alcança posição destacada entre as maiores empresas do setor.",
    date: "10/03/2024"
  },
  {
    id: "3",
    title: "Corrida Saudável 2024",
    img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Evento reuniu colaboradores e comunidade em prol da saúde.",
    date: "01/03/2024"
  }
];

const NewsletterSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#282e76]">
            Últimas Notícias
          </h2>
          <Link 
            to="/newsletter" 
            className="flex items-center gap-2 text-[#0d7c3d] hover:text-[#0a6332] transition-colors text-sm sm:text-base"
          >
            Ver todas
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {NEWS.map((news) => (
            <Link 
              key={news.id}
              to={`/noticias/${news.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={news.img} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <span className="text-xs text-gray-500">{news.date}</span>
                <h3 className="text-base sm:text-lg font-semibold text-[#282e76] mt-2 mb-1 group-hover:text-[#0d7c3d] transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{news.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
