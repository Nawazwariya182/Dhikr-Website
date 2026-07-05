import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhikr - Distraction-Free Quran & Supplication App",
  description: "A beautiful, respectful, and distraction-free mobile application for reciting the Holy Quran, tracking daily supplications, widgets, and securing offline backups.",
  keywords: ["Quran", "Dhikr", "Islamic App", "Salah", "Supplication", "Tasbih", "Dua", "Android APK"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-bg-app text-slate-300">
        {/* Header */}
        <Header />

        {children}

        {/* Footer */}
        <footer className="border-t border-surface-light bg-slate-950/80 py-12 mt-auto" id="main-footer">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div>
                <a href="/" className="text-2xl font-black text-primary-app mb-4 inline-block" id="footer-logo-anchor">Dhikr<span className="text-accent-app">.</span></a>
                <p className="text-slate-400 text-sm max-w-xs">
                  A beautiful, respectful, and distraction-free mobile application designed for daily recitation, study, and remembrance.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-4">Legal</h4>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                  <li><a href="/privacy" className="text-slate-400 text-sm hover:text-primary-app transition" id="footer-privacy-link">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-slate-400 text-sm hover:text-primary-app transition" id="footer-terms-link">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wider mb-4">App</h4>
                <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                  <li><a href="/#features" className="text-slate-400 text-sm hover:text-primary-app transition" id="footer-features-link">Features</a></li>
                  <li><a href="/#download" className="text-slate-400 text-sm hover:text-primary-app transition" id="footer-download-link">Download APK</a></li>
                  <li>
                    <a 
                      href="https://github.com/Nawazwariya182/Dhikr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 text-sm hover:text-primary-app transition inline-flex items-center gap-1.5" 
                      id="footer-github-link"
                    >
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-surface-light pt-6 text-center text-slate-500 text-xs">
              <p>&copy; {currentYear} Dhikr App. All rights reserved. Made with respect for the Holy Quran.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
