"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-5 right-5 z-50 px-4 py-2 rounded-full bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-colors"
    >
      {lang === "en" ? "🇮🇳 Hindi" : "🇺🇸 English"}
    </button>
  );
}