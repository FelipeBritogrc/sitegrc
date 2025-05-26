import React from "react";
import { Link } from "react-router-dom";

const APPS = [
  {
    name: "RC+",
    icon: "/lovable-uploads/93b64577-c63e-48fe-b09a-0aa165a7f468.png",
    iconBg: "from-[#2545B8] to-[#0d7c3d]",
    iconRing: "ring-[#2545B8]/30",
    iconSize: 92,
    description: "Cashback e benefícios exclusivos em todas as suas compras",
    playStore: "https://play.google.com/store/apps/details?id=br.com.redecompras.rcplus",
    appStore: "#",
    learnMore: "/clube/rc-plus"
  },
  {
    name: "Cliente Arretado",
    icon: "/lovable-uploads/ed8adf86-dde9-4369-9d42-eddc2e64f519.png",
    iconBg: "",
    iconRing: "ring-yellow-400/30",
    iconSize: 100,
    description: "Descontos especiais e promoções exclusivas para nossos clientes",
    playStore: "https://play.google.com/store",
    appStore: "#",
    learnMore: "/clube/cliente-arretado"
  }
];

const AppHighlightCards: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f8ff] to-[#e8f7ec] py-14 sm:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2545B8] via-[#0d7c3d] to-[#282e76] text-center mb-2 animate-fade-in">
          Nossos Apps
        </h3>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-10 max-w-xl mx-auto animate-fade-in">
          Descubra os aplicativos oficiais do grupo e aproveite as vantagens e benefícios exclusivos para você!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {APPS.map((app, i) => (
            <div
              key={app.name}
              className={`relative rounded-2xl bg-white/90 shadow-2xl border border-gray-100 flex flex-col items-center px-6 sm:px-10 py-10 animate-fade-in hover:shadow-3xl hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Logo central destacada */}
              <div className={`mb-7 flex items-center justify-center`}>
                <div
                  className={`
                    rounded-full p-2 sm:p-4 shadow-md border-4 border-white ring-4 ${app.iconRing}
                    bg-gradient-to-br ${app.iconBg}
                    flex items-center justify-center
                    transition-all
                    `}
                  style={{
                    width: app.iconSize + 28,
                    height: app.iconSize + 28,
                    minHeight: 90,
                    minWidth: 90
                  }}
                >
                  <img
                    src={app.icon}
                    alt={`Logo ${app.name}`}
                    style={{
                      width: app.iconSize,
                      height: app.iconSize,
                      objectFit: "contain"
                    }}
                    className="drop-shadow-lg"
                    draggable={false}
                  />
                </div>
              </div>
              {/* Descrição */}
              <p className="text-center text-gray-700 text-lg sm:text-xl px-2 font-[500] mb-7 animate-fade-in">{app.description}</p>
              {/* Botões */}
              <div className="flex flex-col gap-3 w-full items-center">
                <Link
                  to={app.learnMore}
                  className="w-full max-w-[170px] py-2.5 rounded-xl font-semibold bg-gradient-to-r from-[#2545B8] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#2545B8] text-white shadow-md hover:shadow-lg transition duration-200 text-center outline-none focus:ring-2 focus:ring-[#0d7c3d]"
                  style={{ letterSpacing: 0.3 }}
                >
                  Saiba mais
                </Link>
                <div className="flex gap-2 items-center justify-center pt-2">
                  <a
                    href={app.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                      alt="Disponível no Google Play"
                      className="h-8 sm:h-10"
                    />
                  </a>
                  <a
                    href={app.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                      alt="Baixar na App Store"
                      className="h-8 sm:h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppHighlightCards;