import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

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
