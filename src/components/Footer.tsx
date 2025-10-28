"use client";

import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer
      id="colophon"
      role="contentinfo"
      itemType="https://schema.org/WPFooter"
      itemScope
  className="bg-linear-to-br from-gray-50 to-gray-100 text-gray-700 border-t border-gray-200 font-sans"
    >
      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap gap-6">
        {/* Coluna 1 – Logotipos */}
        <div className="flex flex-col space-y-2 flex-1 min-w-[180px]">
          <Link
            href="https://www.sc.gov.br"
            aria-label="Portal do Governo de Santa Catarina"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="https://www.sap.sc.gov.br/wp-content/uploads/2022/08/logo-sc.png"
              alt="Logo Governo de Santa Catarina"
              width={100}
              height={60}
              className="h-auto w-auto"
            />
          </Link>

          <Link
            href="https://estado.sc.gov.br"
            aria-label="Governo do Estado de SC"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="https://repositorio.ciasc.sc.gov.br/wp-content/uploads/logo-gov-sc-2024-473px-l-fundobranco.png"
              alt="Governo do Estado de Santa Catarina"
              width={100}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Coluna 2 – Links Externos */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-sm font-semibold text-gray-900 mb-2 border-b-2 border-blue-600 inline-block pb-0.5">
            Links Externos
          </h2>
          <nav aria-label="Links Externos">
            <ul className="space-y-1 text-sm leading-snug">
              {[
                { name: "Portal de Notícias", url: "https://estado.sc.gov.br/noticias/" },
                { name: "Portal de Serviços", url: "https://www.sc.gov.br/" },
                { name: "Diário Oficial", url: "https://doe.sea.sc.gov.br/" },
                { name: "Acesso à Informação", url: "https://estado.sc.gov.br/acesso-a-informacao/" },
                { name: "Órgãos do Governo", url: "https://estado.sc.gov.br/orgaos-do-governo/" },
                { name: "Sobre SC", url: "https://estado.sc.gov.br" },
              ].map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="hover:text-blue-700 transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Coluna 3 – Contatos */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-sm font-semibold text-gray-900 mb-2 border-b-2 border-blue-600 inline-block pb-0.5">
            Fale Conosco
          </h2>
          <ul className="space-y-1 text-sm leading-snug">
            <li>
              <strong>Horário:</strong> 12h às 19h — Seg. a Sex.
            </li>
            <li>
              <strong>Telefone:</strong>{" "}
              <a href="tel:+554836645806" className="text-blue-700 hover:underline">
                +55 (48) 3664-5806
              </a>
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:secretaria@sejuri.sc.gov.br" className="text-blue-700 hover:underline">
                secretaria@sejuri.sc.gov.br
              </a>
            </li>
            <li>
              <strong>Ouvidoria:</strong>{" "}
              <a href="tel:08006448500" className="text-blue-700 hover:underline">
                0800-644-8500
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 – Endereço */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-sm font-semibold text-gray-900 mb-2 border-b-2 border-blue-600 inline-block pb-0.5">
            Endereço
          </h2>
          <address className="not-italic text-sm leading-snug">
            <p className="font-medium">SEJURI - Secretaria de Estado de Justiça e Reintegração Social</p>
            <p>Rua Fúlvio Aducci, 1214 - Loja 06</p>
            <p>Estreito - Florianópolis - SC</p>
            <p>CEP: 88075-000</p>
          </address>
        </div>
      </div>

      {/* --- LINHA INFERIOR --- */}
      <div className="border-t border-gray-300 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} Governo de Santa Catarina — Desenvolvido pela{" "}
            <b>Coordenadoria de Trabalho e Renda</b>
          </p>

          <div className="flex gap-3 text-sm mt-2 sm:mt-0">
            <Link href="https://www.facebook.com/governosc" aria-label="Facebook" target="_blank">
              <i className="fab fa-facebook-f hover:text-blue-600 transition-colors"></i>
            </Link>
            <Link href="https://twitter.com/GovSC" aria-label="Twitter" target="_blank">
              <i className="fab fa-twitter hover:text-sky-500 transition-colors"></i>
            </Link>
            <Link href="https://www.youtube.com/GovernoSC" aria-label="YouTube" target="_blank">
              <i className="fab fa-youtube hover:text-red-600 transition-colors"></i>
            </Link>
            <Link href="https://www.instagram.com/GovernoSC/" aria-label="Instagram" target="_blank">
              <i className="fab fa-instagram hover:text-pink-600 transition-colors"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
