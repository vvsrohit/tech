"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button after scrolling 400px
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-root min-h-screen font-sans text-slate-900 dark:text-slate-100">
      <header className="site-header bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/globe.svg" alt="IEEE Dholakpur" width={44} height={44} />
            <div>
              <div className="text-lg font-semibold">IEEE Dholakpur</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Tech Summit · Community Meetup · Dec 2026
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a href="#schedule" className="text-sm hover:underline">
              Schedule
            </a>
            <a href="#speakers" className="text-sm hover:underline">
              Speakers
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="hero grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              IEEE Dholakpur — Build the future
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Join local engineers, students, and entrepreneurs for two days of
              talks, hands-on workshops, and a community hackathon.
            </p>
          </div>

          <div className="hero-art flex justify-center">
            <Image src="/file.svg" alt="illustration" width={480} height={320} />
          </div>
        </section>

        <section
          id="schedule"
          className="mt-14 bg-white/60 dark:bg-white/5 p-6 rounded"
        >
          <h2 className="text-2xl font-semibold">Schedule (High level)</h2>
          <ul className="mt-4 list-disc pl-5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Day 1:</strong> Keynotes, workshops, lightning talks
            </li>
            <li>
              <strong>Day 2:</strong> Mini-hackathon, demos, awards
            </li>
          </ul>
        </section>

        <section id="speakers" className="mt-8">
          <h2 className="text-2xl font-semibold">Speakers</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white/60 dark:bg-white/5 rounded">
              <div className="text-xl font-semibold">Dr. Priya Saxena</div>
              <div className="text-sm text-slate-500">AI Researcher</div>
            </div>
            <div className="p-4 bg-white/60 dark:bg-white/5 rounded">
              <div className="text-xl font-semibold">Karan Mehta</div>
              <div className="text-sm text-slate-500">Cloud Architect</div>
            </div>
            <div className="p-4 bg-white/60 dark:bg-white/5 rounded">
              <div className="text-xl font-semibold">Nisha Verma</div>
              <div className="text-sm text-slate-500">Product Manager</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer border-t border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <div>© {new Date().getFullYear()} IEEE Dholakpur</div>
          <div className="flex items-center gap-3">
            <a href="#">Code of Conduct</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black p-3 shadow-lg hover:scale-105 transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}
