import React from "react";
import type { Metadata } from "next";
import { Shield, Eye, Database, Lock, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Dhikr App",
  description: "Learn how Dhikr App protects your personal data, recitations, and preferences. Complete privacy policy for our local-first mobile application.",
};

export default function PrivacyPolicy() {
  return (
    <main className="fade-in py-20 min-h-[60vh]" id="privacy-main">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 id="privacy-title" className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: July 2026</p>

        <section className="flex flex-col gap-10 text-slate-300">
          {/* Section 1 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-app/10 flex items-center justify-center text-primary-app">
                <Shield className="w-5 h-5" />
              </div>
              <h2 id="sec-overview" className="text-xl font-bold text-white">1. Overview</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base">
              Dhikr is built as a distraction-free, respectful Quran reading application. We respect your privacy and are committed to protecting it. This Privacy Policy explains our practices regarding data collection, storage, and transfer.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-app/10 flex items-center justify-center text-primary-app">
                <Database className="w-5 h-5" />
              </div>
              <h2 id="sec-data-collection" className="text-xl font-bold text-white">2. Data Collection & Local-First Storage</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base mb-4">
              Dhikr is designed with an <strong className="text-primary-app">Offline-First / Local-First</strong> architecture:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-sm md:text-base text-slate-400">
              <li>All bookmarks, folders, prayer logs, tasbih counts, and reading progress are stored locally on your device's secure storage.</li>
              <li>We do not operate a database server, and we do not collect, read, or catalog your personal usage statistics.</li>
              <li>No advertisements, analytics libraries, or telemetry trackers are integrated into the application.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-app/10 flex items-center justify-center text-accent-app">
                <Lock className="w-5 h-5" />
              </div>
              <h2 id="sec-google-oauth" className="text-xl font-bold text-white">3. Google OAuth & Cloud Syncing</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base mb-4">
              If you decide to connect your Google Account to back up your data:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-sm md:text-base text-slate-400">
              <li><strong className="text-white">Hidden Sandbox Space:</strong> Backups are placed inside Google Drive's private <code>appDataFolder</code>. This folder is hidden from your regular Drive files and cannot be accessed by other applications.</li>
              <li><strong className="text-white">OAuth Scopes:</strong> The application requests access to <code>drive.appdata</code> (to save and restore the JSON backup), and basic profile details (<code>email</code>, <code>profile</code>) to display your Gmail photo and name in the settings screen.</li>
              <li><strong className="text-white">Secure Token Storage:</strong> All OAuth tokens (access tokens, refresh tokens) are saved locally inside your device's hardware-backed secure storage (iOS Keychain / Android Keystore) via <code>expo-secure-store</code>. They are never sent to third-party servers.</li>
              <li><strong className="text-white">Manual Operations:</strong> Cloud synchronization is entirely manual. The app will never silently run background sync operations to Google Drive without your explicit action.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sajdah/10 flex items-center justify-center text-sajdah">
                <Key className="w-5 h-5" />
              </div>
              <h2 id="sec-third-parties" className="text-xl font-bold text-white">4. Third-Party Integrations</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base">
              The app communicates with Google APIs directly for sign-in and backup features, and optionally with public APIs for downloading surah exegesis (Tafseer) or translation text. These requests are made directly from your device to the API endpoints. No intermediary servers are involved.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-surface-app border border-surface-light p-6 md:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-app/10 flex items-center justify-center text-primary-app">
                <Eye className="w-5 h-5" />
              </div>
              <h2 id="sec-children" className="text-xl font-bold text-white">5. Children's Privacy</h2>
            </div>
            <p className="leading-relaxed text-sm md:text-base">
              Because the application does not collect personal data from users of any age, it is safe for use by children. No registration, credentials, or tracking details are required.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
