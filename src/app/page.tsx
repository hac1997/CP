import React from 'react';
import { NavigationCard } from '@/components/ui/NavigationCard';
import { FaHandshake, FaGavel, FaBookOpen, FaBullhorn, FaAward } from 'react-icons/fa';

export default function Home() {
  return (
    // Removido o <main> e as classes de altura mínima. Usando <div> ou fragmento como container de conteúdo.
    <div className="bg-gray-50 "> 
<section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-5 overflow-hidden">
  {/* Efeito de pontos brancos sutis */}
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:30px_30px]" />
  
  {/* Brilho suave central */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />

  <div className="relative max-w-6xl mx-auto px-6 text-center">
    {/* Logo */}
    <div className="mb-0 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-150 -z-10" />
        <img
          src="/images/PP-COLORIDO-PNG.png"
          alt="Logo Polícia Penal"
          className="h-20 w-auto drop-shadow-2xl"
        />
      </div>
    </div>

    {/* Título */}
    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
      Departamento de Polícia Penal
    </h1>

    {/* Subtítulo */}
    <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
      Coordenadoria de Trabalho e Renda
    </p>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavigationCard
            title="Legislação"
            description="Acesse as legislações relacionadas ao trabalho prisional e reintegração social."
            href="/legislacao"
            icon={<FaGavel />}
          />
          <NavigationCard
            title="Orientações"
            description="Consulte orientações e procedimentos internos do departamento."
            href="/orientacoes"
            icon={<FaBookOpen />}
          />
          <NavigationCard
            title="Parcerias Laborais"
            description="Conheça o programa de parcerias laborais e como participar."
            href="/parcerias-laborais"
            icon={<FaHandshake />}
          />
          <NavigationCard
            title="Boas Práticas"
            description="Conheça projetos sociais, oficinas próprias e iniciativas do departamento."
            href="/boas-praticas"
            icon={<FaAward />}
          />
          <NavigationCard
            title="Chamamentos Públicos"
            description="Acompanhe os chamamentos públicos abertos, próximos e encerrados."
            href="/chamamentos"
            icon={<FaBullhorn />}
          />
        </div>
      </section>
    </div>
  );
}