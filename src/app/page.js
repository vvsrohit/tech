"use client"; // Required because we use the hook
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* The Language Switcher */}
      <LanguageToggle />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        
        {/* Dynamic Title */}
        <h1 className="text-4xl font-bold">
          {t.title}
        </h1>
        
        {/* Dynamic Welcome Message */}
        <p className="text-lg">
          {t.welcome}
        </p>

        <div className="flex gap-4 justify-center sm:justify-start">
          <a 
            href="https://github.com/IEEE-PatchFest/tech/issues" 
            target="_blank"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            {t.viewIssues}
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm opacity-75">
        <p>{t.builtBy}</p>
      </footer>
    </div>
  );
}