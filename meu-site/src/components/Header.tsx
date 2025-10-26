"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const mainLinks: NavItem[] = [
  { label: "Portal de Notícias", href: "https://estado.sc.gov.br/noticias/", external: true },
  { label: "Portal de Serviços", href: "https://www.sc.gov.br/", external: true },
  { label: "Diário Oficial", href: "https://doe.sea.sc.gov.br/", external: true },
  { label: "Acesso à Informação", href: "https://estado.sc.gov.br/acesso-a-informacao/", external: true },
  { label: "Órgãos do Governo", href: "https://estado.sc.gov.br/orgaos-do-governo/", external: true },
  { label: "Sobre SC", href: "https://estado.sc.gov.br/", external: true },
];

const internalLinks: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Legislação", href: "/legislacao" },
  { label: "Orientações", href: "/orientacoes" },
  { label: "Acidente de Trabalho", href: "/acidente-trabalho" },
  { label: "Parcerias Laborais", href: "/parcerias-laborais" },
  { label: "Boas Práticas", href: "/boas-praticas" },
  { label: "Chamamentos Públicos", href: "/chamamentos" },
];

const socialLinks: NavItem[] = [
  { label: "Facebook", href: "https://www.facebook.com/governosc" },
  { label: "Twitter", href: "https://twitter.com/GovSC" },
  { label: "YouTube", href: "https://www.youtube.com/GovernoSC" },
  { label: "Instagram", href: "https://www.instagram.com/GovernoSC/" },
  { label: "Flickr", href: "https://www.flickr.com/photos/governosc/" },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="masthead"
      itemScope
      itemType="https://schema.org/WPHeader"
      className="bg-white shadow-md z-50 w-full"
    >
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 md:px-10">
          <a href="https://sc.gov.br/" className="flex items-center space-x-2">
            <img
              src="https://www.sap.sc.gov.br/wp-content/uploads/2022/08/logo-sc.png"
              alt="Logo Governo de Santa Catarina"
              width={180}
              height={44}
            />
          </a>

          <nav className="hidden md:flex space-x-6">
            {mainLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-red-700 transition"
                role="link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="hidden md:flex space-x-1 overflow-x-auto">
            {internalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 transition whitespace-nowrap font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Menu Mobile (Flyout) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg p-6 space-y-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-lg text-gray-800">Menu</span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Navegação Interna</h3>
              {internalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-700 transition font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Links Externos</h3>
              <ul className="space-y-2">
                {mainLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-red-700 transition"
                      role="link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Redes Sociais</h3>
              <ul className="space-y-2">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-gray-600 hover:text-red-700 transition"
                      role="link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
