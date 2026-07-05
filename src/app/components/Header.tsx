"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Github } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-light bg-bg-app/85 backdrop-blur-md" id="nav-header">
      <div className="container mx-auto px-4 max-w-5xl h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 text-2xl font-black text-primary-app tracking-wide animate-fadeIn" id="logo-anchor">
          <Image 
            src="/logo.png" 
            alt="Dhikr App Logo" 
            width={36} 
            height={36} 
            className="rounded-lg object-contain"
            priority
          />
          Dhikr<span className="text-accent-app">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 list-none p-0 m-0">
            <li><a href="/#features" className="text-sm font-semibold text-slate-300 hover:text-primary-app transition" id="nav-features">Features</a></li>
            <li><a href="/privacy" className="text-sm font-semibold text-slate-300 hover:text-primary-app transition" id="nav-privacy">Privacy Policy</a></li>
            <li><a href="/terms" className="text-sm font-semibold text-slate-300 hover:text-primary-app transition" id="nav-terms">Terms of Service</a></li>
            <li>
              <a 
                href="https://github.com/Nawazwariya182/Dhikr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition p-1"
                id="nav-github"
                title="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </li>
            <li><a href="/#download" className="inline-flex items-center justify-center bg-primary-app hover:bg-primary-dark text-white font-bold px-4 py-2 rounded-xl transition text-sm" id="nav-download">Download APK</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden p-2 rounded-lg bg-surface-light text-slate-300 hover:text-white transition focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
          id="nav-hamburger"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-surface-light bg-bg-app/95 backdrop-blur-lg animate-fadeIn" id="mobile-drawer">
          <ul className="flex flex-col p-5 gap-4 list-none m-0">
            <li>
              <a 
                href="/#features" 
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-semibold text-slate-300 hover:text-primary-app transition"
                id="nav-mobile-features"
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="/privacy" 
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-semibold text-slate-300 hover:text-primary-app transition"
                id="nav-mobile-privacy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="/terms" 
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-semibold text-slate-300 hover:text-primary-app transition"
                id="nav-mobile-terms"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Nawazwariya182/Dhikr" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 py-2 text-base font-semibold text-slate-300 hover:text-primary-app transition"
                id="nav-mobile-github"
              >
                <Github className="w-5 h-5" /> GitHub Repository
              </a>
            </li>
            <li className="pt-3 border-t border-surface-light">
              <a 
                href="/#download" 
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center bg-primary-app hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition text-base"
                id="nav-mobile-download"
              >
                Download APK
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
