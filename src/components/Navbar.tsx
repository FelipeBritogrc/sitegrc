
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Início" },
  { href: "/#marcas", label: "Marcas" },
  { href: "/#apps", label: "Apps" },
  { href: "/#valores", label: "Valores" },
  { href: "/#historia", label: "História" },
  { href: "/#parceiros", label: "Parceiros" },
  { href: "/careers", label: "Carreiras" },
  { href: "/ethics", label: "Ética" },
];

const BRAND_BLUE = "#282e76";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        let currentActive = "home";

        for (let section of sections) {
          const rect = section.getBoundingClientRect();
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentActive = section.getAttribute("id") || "home";
            break;
          }
        }
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        scrolled ? "shadow border-b border-gray-200" : ""
      )}
      style={{
        backgroundColor: scrolled ? "#282e76" : "#282e76",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : undefined,
        backdropFilter: scrolled ? "blur(8px)" : undefined,
        transition: "background-color 0.3s"
      }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-3 sm:px-4 py-2 h-14 sm:h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px]">
          <img 
            src="/lovable-uploads/804139f1-92c9-4df5-8437-fd9f2bb21816.png" 
            alt="Grupo RedeCompras"
            className="h-8 sm:h-11 w-auto max-h-[32px] sm:max-h-[44px]"
            style={{ height: "32px", objectFit: "contain" }}
            draggable={false}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-1 xl:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={cn(
                  "rounded px-2 py-1 xl:px-3 xl:py-2 text-sm xl:text-base font-medium transition-all duration-200",
                  "text-white",
                  "hover:text-[#0d7c3d]",
                  (
                    (l.href.startsWith("/#") && l.href.split("#")[1] === activeSection && location.pathname === "/")
                    || (location.pathname === l.href && !l.href.includes("#"))
                  )
                    ? "border-b-2 border-[#0d7c3d] text-[#0d7c3d] bg-white bg-opacity-80"
                    : ""
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#0d7c3d] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#282e76] border-t border-gray-600 shadow-lg">
          <ul className="py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-all duration-200",
                    "text-white",
                    "hover:bg-white hover:bg-opacity-10 hover:text-[#0d7c3d]",
                    (
                      (l.href.startsWith("/#") && l.href.split("#")[1] === activeSection && location.pathname === "/")
                      || (location.pathname === l.href && !l.href.includes("#"))
                    )
                      ? "bg-white bg-opacity-20 text-[#0d7c3d] border-l-4 border-[#0d7c3d]"
                      : ""
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
