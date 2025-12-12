"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Технология", href: "#platform" },
    { name: "Платформа управления", href: "#platform" },
    { name: "тест-драйв", href: "#test-drive" },
    { name: "Наша сеть", href: "#network" },
    { name: "Оставить заявку", href: "#contact", highlight: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9 py-6 md:py-9 flex items-center justify-between">
        <div className="flex items-end gap-8">
          <Logo />
          
          <a
            href="tel:+78006003538"
            className="hidden lg:block text-cyan-400 text-xs uppercase tracking-[0.09em] hover:text-cyan-300 transition-colors"
          >
            + 7 (800) 600-35-38
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-12 text-xs uppercase tracking-[0.09em]">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                item.highlight
                  ? "text-cyan-400 hover:text-cyan-300"
                  : "hover:text-cyan-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>



        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-[1440px] mx-auto px-4 py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm uppercase tracking-[0.09em] py-2 transition-colors ${
                  item.highlight
                    ? "text-cyan-400 hover:text-cyan-300"
                    : "hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+78006003538"
              className="text-cyan-400 text-sm uppercase tracking-[0.09em] py-2 hover:text-cyan-300 transition-colors border-t border-white/10 mt-2 pt-4"
            >
              + 7 (800) 600-35-38
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


