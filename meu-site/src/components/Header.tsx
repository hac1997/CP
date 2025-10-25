"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const mainLinks: NavItem[] = [
  { label: "Portal de Notícias", href: "https://estado.sc.gov.br/noticias/" },
  { label: "Portal de Serviços", href: "https://www.sc.gov.br/" },
  { label: "Diário Oficial", href: "https://doe.sea.sc.gov.br/" },
  { label: "Acesso à Informação", href: "https://estado.sc.gov.br/acesso-a-informacao/" },
  { label: "Órgãos do Governo", href: "https://estado.sc.gov.br/orgaos-do-governo/" },
  { label: "Sobre SC", href: "https://estado.sc.gov.br/" },
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
      {/* Botão Mobile */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        <a href="https://sc.gov.br/" className="flex items-center space-x-2">
          <img
            src="https://www.sap.sc.gov.br/wp-content/uploads/2022/08/logo-sc.png"
            alt="Logo Governo de Santa Catarina"
            width={180}
            height={44}
          />
        </a>

        {/* Menu desktop */}
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

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
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
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-red-700 transition"
                  role="link"
                >
                  {item.label}
                </a>
              ))}
            </nav>

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
