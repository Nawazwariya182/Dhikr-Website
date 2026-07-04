"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { 
  BookOpen, 
  Cloud, 
  Smartphone, 
  Lock, 
  Users, 
  Volume2, 
  Download, 
  ArrowDownCircle,
  ShieldCheck,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  SmartphoneIcon,
  ShieldAlert,
  Moon
} from "lucide-react";

export default function Home() {
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || "v2.0.0";
  const defaultDownloadLink = `https://github.com/Nawazwariya182/Dhikr/releases/download/${appVersion}/dhikr.apk`;
  const downloadLink = process.env.NEXT_PUBLIC_DOWNLOAD_LINK || defaultDownloadLink;
  const autoDownload = process.env.NEXT_PUBLIC_AUTO_DOWNLOAD === "true";
  const fileSize = process.env.NEXT_PUBLIC_APK_FILE_SIZE || "~28 MB";
  const mockuplink = process.env.NEXT_PUBLIC_MOCKUP || "/mockup.png";
  const featuresRaw = process.env.NEXT_PUBLIC_APP_FEATURES || "";
  const featuresList = featuresRaw 
    ? featuresRaw.split(";") 
    : [
        "Distraction-Free Quran|Choose between high-fidelity Uthmani or IndoPak scripts. Includes full Urdu and English translations by Ahmed Raza Khan. Focus entirely on recitation without advertisement banners or trackers.",
        "Secure Google Drive Sync|Syncing is entirely manual, protecting you from accidental overrides. Your data is uploaded to a hidden application sandbox directory inside Google Drive, keeping your backups private and clean.",
        "Desktop Widgets|Beautiful, customizable desktop widgets for tracking your daily Tasbih count, displaying Ayah of the day, or quick-launching your last read bookmark.",
        "Privacy & Encryption|Your credentials and API access tokens are stored securely using device-level hardware keychains (Android Keystore / iOS Keychain) via Expo SecureStore.",
        "Remembrance Circles|Initiate or join group Khatm rooms and collaborative recitation circle rooms. Read together with family and track progress in real-time.",
        "Audio & Speech Assist|High-quality audio streaming of verses, translation playback, and audio assist to support pronunciation and listening on the go."
      ];

  // Interactive states for the preview widgets
  const [tasbihCount, setTasbihCount] = useState(33);
  const [tasbihCircle, setTasbihCircle] = useState(0); // 0: SubhanAllah, 1: Alhamdulillah, 2: AllahuAkbar
  const [audioPlaying, setAudioPlaying] = useState(false);

  const tasbihPhrases = ["سُبْحَانَ ٱللَّٰهِ", "ٱلْحَمْدُ لِلَّٰهِ", "ٱللَّٰهُ أَكْبَرُ"];
  const tasbihMeanings = ["Glory be to Allah", "Praise be to Allah", "Allah is the Greatest"];

  // Auto-download trigger if configured in environment
  useEffect(() => {
    if (autoDownload) {
      const timer = setTimeout(() => {
        const link = document.createElement("a");
        link.href = downloadLink;
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [autoDownload, downloadLink]);

  const handleTasbihTap = () => {
    if (tasbihCount >= 99) {
      setTasbihCount(1);
      setTasbihCircle(0);
    } else {
      const nextCount = tasbihCount + 1;
      setTasbihCount(nextCount);
      if (nextCount > 66) {
        setTasbihCircle(2);
      } else if (nextCount > 33) {
        setTasbihCircle(1);
      } else {
        setTasbihCircle(0);
      }
    }
  };

  const resetTasbih = () => {
    setTasbihCount(0);
    setTasbihCircle(0);
  };

  // Icons map corresponding to index to avoid raw emojis
  const featureIcons = [
    <BookOpen className="w-6 h-6 text-primary-app" key="quran" />,
    <Cloud className="w-6 h-6 text-primary-app" key="sync" />,
    <Smartphone className="w-6 h-6 text-accent-app" key="widgets" />,
    <Lock className="w-6 h-6 text-red-500" key="privacy" />,
    <Users className="w-6 h-6 text-sajdah" key="khatm" />,
    <Volume2 className="w-6 h-6 text-primary-app" key="audio" />
  ];

  return (
    <main className="flex-1 relative min-h-screen grid-mesh" id="home-main">
      {/* Background Ambient Lights */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full radial-glow-1 pointer-events-none z-0" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] rounded-full radial-glow-2 pointer-events-none z-0" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-28 md:pt-8 md:pb-36 z-10" id="hero-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold tracking-wider mb-8 shadow-inner" id="hero-badge">
                <Sparkles className="w-3.5 h-3.5 text-accent-app animate-pulse" /> Mobile App {appVersion}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-6" id="hero-title">
                Your Quran Sanctuary. <span className="bg-gradient-to-r from-primary-app to-cyan-400 bg-clip-text text-transparent">Ad-Free.</span>
              </h1>
              
              <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed max-w-lg" id="hero-subtitle">
                A beautiful, respectful, and distraction-free mobile application for daily Quran recitation, supplication tracking, widgets, and private Google Drive backups.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6" id="hero-actions">
                <a 
                  href={downloadLink} 
                  download 
                  className="glow-btn inline-flex items-center justify-center gap-2 bg-primary-app hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-primary-app/20 hover:shadow-primary-app/35 transition-all transform hover:-translate-y-0.5 text-base" 
                  id="btn-hero-download"
                >
                  <Download className="w-5 h-5" /> Download APK
                </a>
                <a 
                  href="#preview" 
                  className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-800 hover:border-slate-700 font-bold px-8 py-4 rounded-2xl transition-all transform hover:-translate-y-0.5 text-base backdrop-blur-md" 
                  id="btn-hero-features"
                >
                  Try App Demo
                </a>
              </div>

              {autoDownload && (
                <div className="flex items-center gap-2 text-xs text-accent-app font-semibold bg-accent-app/10 border border-accent-app/20 px-4 py-2 rounded-xl" id="autodownload-notice">
                  <ArrowDownCircle className="w-4 h-4 animate-bounce" /> Your download has started automatically...
                </div>
              )}
            </div>

            {/* Right Column: App Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Soft decorative glow behind mockup */}
              <div className="absolute inset-0 bg-primary-app/10 blur-[60px] rounded-full scale-75 animate-pulse" />
              <div className="relative w-full max-w-[310px] aspect-[9/18.5] rounded-[28px] overflow-hidden drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)] border border-white/5 transition-transform duration-700 hover:rotate-1 animate-float">
                <img
                  src={mockuplink}
                  alt="Dhikr App UI Mockup"
                  style={{ objectFit: "cover", width: '100%', height: '100%' }}
                  className="opacity-95"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Islamic Calligraphy Divider / Arabic Font Showcase */}
      <section className="py-14 border-t border-b border-white/5 bg-slate-950/30 text-center relative z-10" id="quran-quote-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="font-arabic text-4xl md:text-5xl text-accent-app leading-loose mb-3 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </p>
          <p className="text-slate-400 text-xs md:text-sm font-bold tracking-widest uppercase opacity-85">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>
      </section>

      {/* Interactive App Preview Section */}
      <section className="py-24 border-b border-white/5 relative z-10" id="preview">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4.5xl font-black text-white tracking-tight mb-4" id="preview-title">
              Experience the App Layout
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed" id="preview-subtitle">
              Try a live preview of the interactive widgets and clean text rendering right on the web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch" id="preview-container">
            
            {/* Widget 1: Interactive Tasbih Widget */}
            <div className="md:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-slate-950/50 backdrop-blur-md relative overflow-hidden group shadow-lg shadow-black/40">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-app/5 blur-2xl rounded-full" />
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-app flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4" /> Desktop Widget
                  </span>
                  <button 
                    onClick={resetTasbih} 
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
                    title="Reset Widget"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="text-center py-6">
                  <p className="font-arabic text-3xl text-white mb-2 leading-loose h-12">
                    {tasbihPhrases[tasbihCircle]}
                  </p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-6">
                    {tasbihMeanings[tasbihCircle]}
                  </p>
                  
                  {/* Tap counter Button */}
                  <button 
                    onClick={handleTasbihTap}
                    className="relative w-40 h-40 rounded-full bg-slate-900 border-4 border-slate-800 hover:border-accent-app flex flex-col items-center justify-center transition-all duration-300 transform active:scale-95 shadow-2xl mx-auto cursor-pointer focus:outline-none"
                    id="widget-tasbih-tap"
                  >
                    <span className="text-4xl font-black text-white font-mono leading-none mb-3">{tasbihCount}</span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Tap to count</span>
                  </button>
                </div>
              </div>
              
              <div className="border-t border-white/5 pt-5 mt-6 text-center">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Interactive Remembrance Counter. Replicates the custom Android widget included in the app.
                </p>
              </div>
            </div>

            {/* Widget 2: Quran Reader Mockup Card */}
            <div className="md:col-span-7 flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-slate-950/50 backdrop-blur-md relative overflow-hidden group shadow-lg shadow-black/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-app/5 blur-3xl rounded-full" />
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-app flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Quran Interface Preview
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary-app/10 text-primary-app border border-primary-app/20">Ahmed Raza Khan</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-400">Uthmani Hafs</span>
                  </div>
                </div>

                <div className="py-6 flex flex-col justify-center min-h-[220px]" dir="rtl">
                  {/* Ayah display */}
                  <div className="mb-6 leading-loose text-right">
                    <p className="font-arabic text-3xl text-white leading-[2.1] text-right font-normal">لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا<span className="font-arabic text-accent-app text-2xl mx-2">٢٨٦</span>
                    </p>
                  </div>
                  
                  {/* Translation */}
                  <div className="text-left mt-3 border-t border-white/5 pt-4" dir="ltr">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      "Allah does not burden anyone, except with something within its capacity;"
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-5 flex items-center justify-between mt-6">
                <p className="text-slate-500 text-xs font-semibold">Al-Baqara (2:286)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Asymmetric Features List */}
      <section className="py-24 md:py-32 relative z-10" id="features">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4.5xl font-black text-white mb-4" id="features-title">
              Engineered for Spiritual Clarity
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed" id="features-subtitle">
              Every detail is designed to remove the digital noise and help you focus on what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8" id="features-grid">
            {featuresList.map((feature, idx) => {
              const [title, desc] = feature.split("|");
              const colSpan = idx === 0 || idx === 1 ? "md:col-span-3" : "md:col-span-2";
              
              return (
                <div 
                  className={`${colSpan} flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-slate-950/30 hover:border-primary-app/20 transition-all duration-300 hover:shadow-2xl`} 
                  key={idx}
                  id={`feat-custom-${idx}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary-app/10 flex items-center justify-center text-primary-app mb-6">
                      {featureIcons[idx % featureIcons.length]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{title || "Feature"}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {desc || "Feature description"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparisons / App Integrity Section */}
      <section className="py-24 border-t border-b border-white/5 bg-slate-950/20 relative z-10" id="integrity">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white mb-4" id="compare-title">
              Dhikr vs. Bloated Islamic Apps
            </h2>
            <p className="text-slate-400 text-sm" id="compare-subtitle">
              We respect your spiritual routine, offering a clean app experience with zero telemetry.
            </p>
          </div>

          <div className="overflow-hidden border border-white/5 rounded-2xl bg-slate-950/50" id="compare-table-wrapper">
            <table className="w-full text-left border-collapse" id="compare-table">
              <thead>
                <tr className="border-b border-white/5 bg-slate-900/60">
                  <th className="p-5 text-sm font-bold text-white">App Features</th>
                  <th className="p-5 text-sm font-bold text-primary-app text-center">Dhikr App</th>
                  <th className="p-5 text-sm font-bold text-slate-500 text-center">Typical Apps</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="p-5 font-medium text-slate-300">Advertisement Banners</td>
                  <td className="p-5 text-center text-primary-app font-bold">None (Zero Ads)</td>
                  <td className="p-5 text-center text-slate-500">Very High (Popups & Video)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-5 font-medium text-slate-300">Paid Subscriptions</td>
                  <td className="p-5 text-center text-primary-app font-bold">100% Free / Open</td>
                  <td className="p-5 text-center text-slate-500">Premium paywalls</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-5 font-medium text-slate-300">User Data Logging</td>
                  <td className="p-5 text-center text-primary-app font-bold">None (Local Storage Only)</td>
                  <td className="p-5 text-center text-slate-500">Telemetry & Ad trackers</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-slate-300">Cloud Backup Space</td>
                  <td className="p-5 text-center text-primary-app font-bold">Google Private App Sandbox</td>
                  <td className="p-5 text-center text-slate-500">Third-party server databases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 relative z-10" id="download">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl" id="download-box">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-accent-app/5 blur-3xl pointer-events-none" />
            
            <h2 className="text-3xl md:text-4.5xl font-black text-white tracking-tight mb-4" id="download-box-title">
              Download Dhikr Now
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed" id="download-box-desc">
              Get the latest compiled Android application package directly and resume your daily recitation offline.
            </p>
            
            <div className="flex flex-col items-center gap-4" id="download-actions">
              <a 
                href={downloadLink} 
                download 
                className="glow-btn inline-flex items-center justify-center gap-2.5 bg-primary-app hover:bg-primary-dark text-white font-bold px-10 py-4.5 rounded-2xl shadow-xl shadow-primary-app/20 transition-all text-base cursor-pointer"
                id="download-apk-button"
              >
                <Download className="w-5.5 h-5.5" /> Download App APK ({appVersion})
              </a>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold" id="download-meta">
                <ShieldCheck className="w-4 h-4 text-primary-app" /> Secure SHA-256 Signatures Certified | Size: {fileSize}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
