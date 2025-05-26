
import React from "react";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/redecomprasoficial", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png" },
  { label: "Facebook", href: "https://facebook.com/redecomprasoficial", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384053.png" },
];

const Footer: React.FC = () => (
  <footer className="bg-[#282e76] border-t border-[#282e76] py-6 sm:py-8 px-4 sm:px-6 mt-8 sm:mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
      <div className="text-center md:text-left">
        <img
          src="/lovable-uploads/804139f1-92c9-4df5-8437-fd9f2bb21816.png"
          alt="Grupo RedeCompras"
          className="h-8 sm:h-9 mb-2 max-h-[32px] sm:max-h-[36px] mx-auto md:mx-0"
          style={{ height: "32px", objectFit: "contain" }}
        />
        <p className="text-white text-xs sm:text-sm max-w-xs mx-auto md:mx-0">
          © {new Date().getFullYear()} Grupo RedeCompras. Todos os direitos reservados.<br />
          Av. Principal, João Pessoa, PB &mdash; Tel: (83) 1234-5678
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-2 sm:gap-3">
        <span className="font-medium text-white mb-1 text-sm sm:text-base">
          Siga nas redes sociais:
        </span>
        <div className="flex gap-3 sm:gap-4">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover-scale">
              <img 
                src={s.icon} 
                alt={s.label} 
                className="h-6 w-6 sm:h-7 sm:w-7 opacity-90 hover:opacity-100 transition" 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
