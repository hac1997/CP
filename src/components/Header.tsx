"use client";
import React, { useState, useRef, useEffect } from "react";
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
    { label: "Parcerias Laborais", href: "/parcerias-laborais" },
    { label: "Boas Práticas", href: "/boas-praticas" },
    { label: "Chamamentos Públicos", href: "/chamamentos" },
];

const socialLinks: NavItem[] = [
    { label: "Facebook", href: "https://www.facebook.com/governosc" },
    { label: "Twitter", href: "https://twitter.com/GovSC" },
    { label: "YouTube", href: "https://www.youtube.com/GovernoSC" },
    { label: "Instagram", href: "https://www.instagram.com/GovernoSC/" },
];

export const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            callback();
        }
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (menuOpen) {
            dialog.showModal();
            // Foco no primeiro item interativo
            const firstLink = dialog.querySelector("a, button");
            if (firstLink instanceof HTMLElement) {
                firstLink.focus();
            }
        } else {
            dialog.close();
        }
    }, [menuOpen]);

    return (
        <header className="bg-white shadow-sm w-full fixed top-0 z-50 font-sans">
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
                    <a href="https://sc.gov.br/" className="flex items-center gap-3 shrink-0">
                        <img
                            src="https://www.sap.sc.gov.br/wp-content/uploads/2022/08/logo-sc.png"
                            alt="Logo Governo de Santa Catarina"
                            className="h-12 w-auto object-contain"
                        />
                    </a>

                    <nav className="hidden lg:flex gap-5 text-base font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {mainLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-red-700 transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-700"
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 hidden lg:block">
                <nav className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 py-2">
                        {internalLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-150 text-base font-medium"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {menuOpen && (
                <>
                    <button
                        type="button"
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        onClick={closeMenu}
                        onKeyDown={(e) => handleKeyDown(e, closeMenu)}
                        aria-label="Fechar menu"
                        tabIndex={0}
                    />
                    <dialog
                        ref={dialogRef}
                        className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg p-6 overflow-y-auto space-y-6 z-50 m-0 border-0 open:flex open:flex-col"
                        aria-label="Menu de navegação"
                        aria-modal="true"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-lg text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>Menu</span>
                            <button
                                onClick={closeMenu}
                                onKeyDown={(e) => handleKeyDown(e, closeMenu)}
                                aria-label="Fechar menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                Navegação Interna
                            </h3>
                            {internalLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block text-gray-700 hover:text-blue-700 py-1.5"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 border-t pt-3 uppercase tracking-wide">
                                Links Externos
                            </h3>
                            {mainLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block text-gray-700 hover:text-red-700 py-1.5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2 border-t pt-3 uppercase tracking-wide">
                                Redes Sociais
                            </h3>
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block text-gray-600 hover:text-red-700 py-1.5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </dialog>
                </>
            )}
        </header>
    );
};