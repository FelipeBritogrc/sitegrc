
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import BannerCarousel from "@/components/BannerCarousel";
import NewsletterSection from "@/components/NewsletterSection";
import AppHighlightCards from "@/components/AppHighlightCards";
import ValueCards from "@/components/ValueCards";
import TimelineSection from "@/components/TimelineSection";
import PartnersSlider from "@/components/PartnersSlider";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const section = sectionsRef.current[target.hash.slice(1)];
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <main className="flex-1 flex flex-col pt-14 sm:pt-16">
        <section 
          ref={el => sectionsRef.current['home'] = el}
          id="home" 
          className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center"
        >
          <BannerCarousel />
        </section>

        <section 
          ref={el => sectionsRef.current['noticias'] = el}
          id="noticias"
        >
          <NewsletterSection />
        </section>

        <section 
          ref={el => sectionsRef.current['marcas'] = el}
          id="marcas" 
          className="py-12 sm:py-16"
        >
          <BrandsSection />
        </section>

        <section 
          ref={el => sectionsRef.current['apps'] = el}
          id="apps" 
          className="py-12 sm:py-16"
        >
          <AppHighlightCards />
        </section>

        <section 
          ref={el => sectionsRef.current['valores'] = el}
          id="valores" 
          className="py-12 sm:py-16"
        >
          <ValueCards />
        </section>

        <section 
          ref={el => sectionsRef.current['historia'] = el}
          id="historia" 
          className="py-12 sm:py-16"
        >
          <TimelineSection />
        </section>

        <section 
          ref={el => sectionsRef.current['parceiros'] = el}
          id="parceiros" 
          className="py-12 sm:py-16"
        >
          <PartnersSlider />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
