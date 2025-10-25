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
      className="bg-gray-100 text-gray-800 border-t border-gray-200 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1 – Logotipos */}
        <div className="space-y-4">
          <Link
            href="https://www.sc.gov.br"
            aria-label="Portal do Governo de Santa Catarina"
          >
            <Image
              src="https://www.sap.sc.gov.br/wp-content/uploads/2022/08/logo-sc.png"
              alt="Logo Governo de Santa Catarina"
              width={300}
              height={74}
              className="h-auto w-auto"
            />
          </Link>

          <Link
            href="https://estado.sc.gov.br"
            aria-label="Governo do Estado de SC"
          >
            <Image
              src="https://repositorio.ciasc.sc.gov.br/wp-content/uploads/logo-gov-sc-2024-473px-l-fundobranco.png"
              alt="Governo do Estado de Santa Catarina"
              width={200}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Coluna 2 – Links Externos */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Links Externos</h2>
          <nav aria-label="Links Externos">
            <ul className="space-y-2">
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
                    className="hover:text-blue-700 transition-colors"
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
        <div>
          <h2 className="text-lg font-semibold mb-4">Fale Conosco</h2>
          <ul className="space-y-3">
            <li>
              <strong>Horário de Expediente:</strong>
              <p>das 12h às 19h de Segunda a Sexta</p>
            </li>
            <li>
              <strong>Telefone:</strong>
              <p>
                <a href="tel:+554836645806" className="text-blue-700 hover:underline">
                  +55 (48) 3664 5806
                </a>
              </p>
            </li>
            <li>
              <strong>E-mail:</strong>
              <p>
                <a
                  href="mailto:secretaria@sejuri.sc.gov.br"
                  className="text-blue-700 hover:underline"
                >
                  secretaria@sejuri.sc.gov.br
                </a>
              </p>
            </li>
            <li>
              <strong>Telefone da Ouvidoria:</strong>
              <p>
                <a href="tel:08006448500" className="text-blue-700 hover:underline">
                  0800-644-8500
                </a>
              </p>
            </li>
          </ul>
        </div>

        {/* Coluna 4 – Endereço */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Endereço</h2>
          <address className="not-italic">
            <p>
              <strong>SEJURI - Secretaria de Estado de Justiça e Reintegração Social</strong>
            </p>
            <p>Rua Fúlvio Aducci, 1214 - Loja 06</p>
            <p>Estreito - Florianópolis - SC</p>
            <p>CEP: 88075-000</p>
          </address>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-300 mt-6 pt-6 pb-10 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Governo de Santa Catarina — Desenvolvido por <b>CIASC</b>
          </p>

          {/* Ícones sociais */}
          <div className="flex gap-4 mt-4 md:mt-0 text-lg">
            <Link href="https://www.facebook.com/governosc" aria-label="Facebook" target="_blank">
              <i className="fab fa-facebook-f hover:text-blue-600"></i>
            </Link>
            <Link href="https://twitter.com/GovSC" aria-label="Twitter" target="_blank">
              <i className="fab fa-twitter hover:text-sky-500"></i>
            </Link>
            <Link href="https://www.youtube.com/GovernoSC" aria-label="YouTube" target="_blank">
              <i className="fab fa-youtube hover:text-red-600"></i>
            </Link>
            <Link href="https://www.instagram.com/GovernoSC/" aria-label="Instagram" target="_blank">
              <i className="fab fa-instagram hover:text-pink-600"></i>
            </Link>
            <Link href="https://www.flickr.com/photos/governosc/" aria-label="Flickr" target="_blank">
              <i className="fab fa-flickr hover:text-purple-600"></i>
            </Link>
            <Link href="https://www.tiktok.com/@governosc" aria-label="TikTok" target="_blank">
              <i className="fab fa-tiktok hover:text-gray-800"></i>
            </Link>
          </div>
        </div>

        {/* Selo */}
        <div className="mt-6 flex justify-center">
          <Link
            href="https://estado.sc.gov.br/orgaos-do-governo/"
            aria-label="Selo SC Governo"
          >
            <Image
              src="https://www.sap.sc.gov.br/wp-content/uploads/2022/08/celo-2.fw_.png"
              alt="Selo Governo SC"
              width={330}
              height={94}
              className="h-auto w-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
