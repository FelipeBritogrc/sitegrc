
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobModal from "@/components/JobModal";
import { Mail, MapPin, Users, Briefcase, Eye, Clock, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FORM_EMAIL = "rh@redecompras.com.br";

// Dados das vagas com informações detalhadas
const jobsData = [
  {
    id: 1,
    title: "Atendente de Loja",
    location: "João Pessoa, PB",
    type: "CLT",
    salary: "R$ 1.500 - R$ 2.000",
    department: "Vendas",
    description: "Responsável pelo atendimento aos clientes, orientação sobre produtos e suporte na experiência de compra. Buscamos uma pessoa comunicativa, proativa e com foco no cliente.",
    requirements: [
      "Ensino médio completo",
      "Experiência em atendimento ao cliente (desejável)",
      "Boa comunicação e relacionamento interpessoal",
      "Disponibilidade para trabalhar em escala de revezamento",
      "Conhecimentos básicos em informática"
    ],
    responsibilities: [
      "Atender clientes presenciais e por telefone",
      "Orientar sobre produtos e serviços",
      "Realizar vendas e processar pagamentos",
      "Manter organização e limpeza do ambiente",
      "Apoiar na reposição de produtos"
    ],
    benefits: [
      "Vale alimentação",
      "Vale transporte",
      "Plano de saúde",
      "Comissão sobre vendas",
      "Desconto em produtos"
    ]
  },
  {
    id: 2,
    title: "Repositor de Estoque",
    location: "João Pessoa, PB",
    type: "CLT",
    salary: "R$ 1.300 - R$ 1.600",
    department: "Logística",
    description: "Responsável pela organização, reposição e controle do estoque da loja, garantindo a disponibilidade dos produtos nas prateleiras e a organização do ambiente.",
    requirements: [
      "Ensino fundamental completo",
      "Experiência em estoque ou almoxarifado (desejável)",
      "Capacidade física para movimentação de produtos",
      "Atenção aos detalhes e organização",
      "Disponibilidade de horários"
    ],
    responsibilities: [
      "Repor produtos nas prateleiras",
      "Organizar e limpar o estoque",
      "Receber e conferir mercadorias",
      "Controlar validade dos produtos",
      "Apoiar no inventário mensal"
    ],
    benefits: [
      "Vale alimentação",
      "Vale transporte",
      "Plano de saúde básico",
      "Cesta básica",
      "Desconto em produtos"
    ]
  },
  {
    id: 3,
    title: "Analista de Marketing Digital",
    location: "João Pessoa, PB",
    type: "CLT",
    salary: "R$ 3.000 - R$ 4.500",
    department: "Marketing",
    description: "Profissional responsável por desenvolver e executar estratégias de marketing digital, gerenciar redes sociais e campanhas online para aumentar a visibilidade da marca.",
    requirements: [
      "Ensino superior em Marketing, Comunicação ou áreas afins",
      "Experiência comprovada em marketing digital",
      "Conhecimento em Google Ads, Facebook Ads e Instagram",
      "Domínio de ferramentas de design (Photoshop, Canva)",
      "Conhecimento em métricas e analytics"
    ],
    responsibilities: [
      "Criar e gerenciar campanhas digitais",
      "Desenvolver conteúdo para redes sociais",
      "Analisar métricas e ROI das campanhas",
      "Gerenciar presença online da marca",
      "Colaborar com equipe de vendas"
    ],
    benefits: [
      "Vale alimentação",
      "Vale transporte",
      "Plano de saúde e odontológico",
      "Participação nos lucros",
      "Home office híbrido"
    ]
  },
  {
    id: 4,
    title: "Estágio em Administração",
    location: "João Pessoa, PB",
    type: "Estágio",
    salary: "R$ 800 + benefícios",
    department: "Administrativo",
    description: "Oportunidade para estudantes de Administração que desejam adquirir experiência prática em gestão empresarial, processos administrativos e atendimento ao cliente.",
    requirements: [
      "Cursando Administração a partir do 3º período",
      "Disponibilidade de 6 horas diárias",
      "Conhecimentos em pacote Office",
      "Boa comunicação e proatividade",
      "Residir em João Pessoa ou região metropolitana"
    ],
    responsibilities: [
      "Apoiar processos administrativos",
      "Auxiliar no atendimento ao cliente",
      "Organizar documentos e arquivos",
      "Apoiar em relatórios gerenciais",
      "Participar de projetos da empresa"
    ],
    benefits: [
      "Bolsa auxílio",
      "Vale transporte",
      "Auxílio alimentação",
      "Experiência profissional",
      "Possibilidade de efetivação"
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleJobClick = (job: typeof jobsData[0]) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Currículo enviado com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2545B8] to-[#282e76] text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Trabalhe Conosco
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Quer fazer parte do time RedeCompras? Junte-se a nós e construa uma carreira de sucesso em uma empresa que valoriza pessoas e inovação.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Building className="w-4 h-4" />
                <span>Ambiente colaborativo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>Crescimento profissional</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>Flexibilidade</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Formulário de Envio de Currículo */}
            <div className="order-2 lg:order-1">
              <div id="curriculo-form" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#2545B8] p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2545B8]">
                    Envie seu currículo
                  </h2>
                </div>
                
                <form 
                  className="space-y-4 sm:space-y-5"
                  action={`https://formsubmit.co/${FORM_EMAIL}`}
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="_subject" value="Novo currículo recebido!" />
                  
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input 
                      type="text" 
                      id="nome"
                      name="nome" 
                      placeholder="Digite seu nome completo" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#2545B8] focus:border-transparent transition-all" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="seu@email.com" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#2545B8] focus:border-transparent transition-all" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input 
                      type="tel" 
                      id="telefone"
                      name="telefone" 
                      placeholder="(83) 99999-9999" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#2545B8] focus:border-transparent transition-all" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="vaga-interesse" className="block text-sm font-medium text-gray-700 mb-2">
                      Vaga de interesse
                    </label>
                    <select 
                      id="vaga-interesse"
                      name="vaga-interesse" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-[#2545B8] focus:border-transparent transition-all"
                    >
                      <option value="">Selecione uma vaga (opcional)</option>
                      {jobsData.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title} - {job.location}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-2">
                      Currículo (PDF) *
                    </label>
                    <input 
                      type="file" 
                      id="curriculo"
                      name="curriculo" 
                      accept=".pdf" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#2545B8] file:text-white file:cursor-pointer hover:file:bg-[#19317C] transition-all" 
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#2545B8] text-white font-semibold rounded-lg py-3 sm:py-4 text-sm sm:text-base hover:bg-[#19317C] focus:ring-4 focus:ring-[#2545B8]/30 transition-all transform hover:scale-[1.02]"
                  >
                    Enviar Currículo
                  </button>
                </form>
              </div>
            </div>

            {/* Vagas Disponíveis e Informações */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              
              {/* Vagas Disponíveis */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#0d7c3d] p-2 rounded-lg">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2545B8]">
                    Vagas Disponíveis
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {jobsData.map((job) => (
                    <div 
                      key={job.id} 
                      className="border border-gray-200 rounded-lg p-4 hover:border-[#2545B8] hover:shadow-md transition-all cursor-pointer group"
                      onClick={() => handleJobClick(job)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#2545B8] transition-colors">
                          {job.title}
                        </h3>
                        <Eye className="w-4 h-4 text-gray-400 group-hover:text-[#2545B8] transition-colors" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span className="bg-[#2545B8] text-white px-2 py-1 rounded text-xs font-medium">
                          {job.type}
                        </span>
                        {job.salary && (
                          <>
                            <span className="hidden sm:inline">•</span>
                            <span className="text-[#0d7c3d] font-medium">{job.salary}</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">{job.description}</p>
                      <div className="mt-2 text-xs text-[#2545B8] font-medium">
                        Clique para ver detalhes →
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Por que trabalhar conosco */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#0d7c3d] p-2 rounded-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2545B8]">
                    Por que trabalhar conosco?
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0d7c3d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Ambiente de trabalho colaborativo e acolhedor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0d7c3d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Oportunidades de crescimento profissional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0d7c3d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Benefícios competitivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0d7c3d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Valorização das pessoas e diversidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0d7c3d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Empresa em constante crescimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0d7c3d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Flexibilidade e equilíbrio trabalho-vida</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Modal de Vaga */}
      {selectedJob && (
        <JobModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          job={selectedJob}
        />
      )}

      <Footer />
    </div>
  );
};

export default Careers;
