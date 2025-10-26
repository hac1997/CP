import React from 'react';
import { NavigationCard } from '@/components/ui/NavigationCard';
import { FaHandshake, FaGavel, FaBookOpen, FaBullhorn, FaAward } from 'react-icons/fa';

export default function Home() {
  return (
    // Removido o <main> e as classes de altura mínima. Usando <div> ou fragmento como container de conteúdo.
    <div className="bg-gray-50 "> 
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Departamento de Polícia Penal
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
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