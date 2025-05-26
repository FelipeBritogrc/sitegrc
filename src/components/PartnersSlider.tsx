
import React from "react";

const PARTNERS = [
  { name: "Nestlé", logo: "https://cdn.worldvectorlogo.com/logos/nestle.svg" },
  { name: "Coca-Cola", logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg" },
  { name: "Unilever", logo: "https://cdn.worldvectorlogo.com/logos/unilever-2.svg" },
  { name: "Danone", logo: "https://cdn.worldvectorlogo.com/logos/danone.svg" },
  { name: "Ambev", logo: "https://cdn.worldvectorlogo.com/logos/ambev.svg" },
  { name: "Pepsico", logo: "https://cdn.worldvectorlogo.com/logos/pepsico-1.svg" },
];

const PartnersSlider: React.FC = () => {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % PARTNERS.length), 2200);
    return () => clearInterval(timer);
  }, []);

  // Responsive display logic
  const getDisplayCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 481) return 1; // XS
      if (window.innerWidth < 769) return 2; // SM
      return 3; // MD, LG, XL
    }
    return 3;
  };

  const [displayCount, setDisplayCount] = React.useState(getDisplayCount);

  React.useEffect(() => {
    const handleResize = () => setDisplayCount(getDisplayCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const display = Array.from({ length: displayCount }, (_, i) => 
    PARTNERS[(idx + i) % PARTNERS.length]
  );

  return (
    <section id="brands" className="max-w-6xl mx-auto mt-12 sm:mt-16 px-3 sm:px-4">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        Parceiros & Fornecedores
      </h2>
      <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-14">
        {display.map((p, i) => (
          <div 
            key={`${p.name}-${i}`} 
            className="bg-white rounded-xl shadow p-3 sm:p-4 flex flex-col items-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] transition-all hover-scale"
            style={{ 
              opacity: (displayCount === 3 && i === 1) || displayCount < 3 ? 1 : 0.65, 
              scale: (displayCount === 3 && i === 1) || displayCount < 3 ? "1.08" : "1" 
            }}
          >
            <img 
              src={p.logo} 
              alt={p.name} 
              className="h-10 sm:h-12 lg:h-16 object-contain max-w-[70px] sm:max-w-[90px] lg:max-w-[110px] mb-1 sm:mb-2 select-none pointer-events-none" 
            />
            <span className="text-gray-700 font-medium text-xs sm:text-sm text-center">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSlider;
