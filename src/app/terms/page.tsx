import React from "react";
import type { Metadata } from "next";
import { FileText, Award, AlertTriangle, ShieldAlert, Edit } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Dhikr App",
  description: "Read the Terms of Service for Dhikr App, explaining user rights, free usage licenses, and software disclaimers.",
};

export default function TermsOfService() {
  return (
    <main className="fade-in py-20 min-h-[60vh]" id="terms-main">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 id="terms-title" className="text-4xl font-black text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: July 2026</p>

        <section className="flex flex-col gap-10 text-slate-300">
          {/* Section 1 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-app/10 flex items-center justify-center text-primary-app">
                <FileText className="w-5 h-5" />
              </div>
              <h2 id="sec-agreement" className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base">
              By downloading, installing, or using the Dhikr mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the application.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-app/10 flex items-center justify-center text-primary-app">
                <Award className="w-5 h-5" />
              </div>
              <h2 id="sec-license" className="text-xl font-bold text-white">2. Use License</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base mb-4">
              Dhikr is distributed under a free, personal, non-exclusive, non-transferable license.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-sm md:text-base text-slate-400">
              <li>You may use the application for personal, non-commercial, devotional, and study purposes.</li>
              <li>You may not modify, reverse engineer, decompile, or attempt to extract the source code of the application unless permitted by law or an open-source license.</li>
              <li>You may distribute the compiled APK files to friends and family, provided no fees are charged.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-app/10 flex items-center justify-center text-accent-app">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 id="sec-content" className="text-xl font-bold text-white">3. Content Ownership & Respect</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base">
              All text, fonts, translations, and exegesis (Tafseer) of the Holy Quran remain the property of their respective authors and publishers. The app aggregates these resources for educational and reading purposes. Users are expected to utilize the application in a respectful manner.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 id="sec-disclaimer" className="text-xl font-bold text-white">4. Disclaimer of Warranties</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base mb-4">
              The application is provided "as is" and "as available" without any warranties of any kind, express or implied.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-sm md:text-base text-slate-400">
              <li>We do not warrant that the application will run uninterrupted, error-free, or be completely secure.</li>
              <li>We are not responsible for any data loss, including corrupted local backups or Google Drive synchronization failures. We highly recommend verifying your manual backups.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sajdah/10 flex items-center justify-center text-sajdah">
                <Edit className="w-5 h-5" />
              </div>
              <h2 id="sec-modifications" className="text-xl font-bold text-white">5. Modifications to Terms</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base">
              We reserve the right to modify these Terms of Service at any time. Your continued use of the application following the posting of changes constitutes acceptance of those changes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
