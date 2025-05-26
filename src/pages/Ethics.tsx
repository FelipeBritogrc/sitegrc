
import Navbar from "@/components/Navbar";
import ValueCards from "@/components/ValueCards";
import Footer from "@/components/Footer";

const Ethics = () => (
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <section className="max-w-3xl mx-auto my-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2545B8] mb-6">Código de Ética & Governança</h1>
        <p className="text-lg text-gray-700 mb-6">
          O Grupo RedeCompras adota valores sólidos e princípios éticos que norteiam nossas ações diárias,
          reforçando nosso compromisso com nossos clientes, parceiros e colaboradores. <br className="hidden md:inline"/><br/>
          Transparência, respeito, integridade e responsabilidade estão presentes em todos os projetos e relações.
        </p>
      </section>
      <ValueCards />
      <section className="max-w-2xl mx-auto my-10 px-4 text-gray-700 text-justify">
        <h2 className="text-xl font-semibold mb-3 text-[#2545B8]">Nosso Compromisso</h2>
        <p>
          Ética é o pilar do nosso crescimento sustentável, refletida no respeito aos clientes, fornecedores e colaboradores.
          Priorizamos a governança responsável, a inovação com propósito e a criação de um ambiente onde todos possam prosperar.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);
export default Ethics;
