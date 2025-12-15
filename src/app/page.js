"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      setLoading(true);
      setError(false);

      try {
        const data = await fetchProducts(controller.signal);
        if (data) setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
    return () => controller.abort();
  }, [retry]);

  return (
    <div className="page-root min-h-screen font-sans bg-gray-50 dark:bg-black text-slate-900 dark:text-slate-100">
      {/* HEADER */}
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
        </div>
      </header>

      {/* MAIN */}
      <main className="container mx-auto px-6 py-12">
        {/* HERO */}
        <section className="hero grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              IEEE Dholakpur — Build the future
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Talks, workshops, hackathons, and community learning.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/file.svg" alt="illustration" width={480} height={320} />
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">
            Community Store (Live API)
          </h2>

          {/* Loading */}
          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white/60 dark:bg-white/5 rounded-xl p-4 space-y-3"
                >
                  <div className="h-32 bg-gray-200 dark:bg-zinc-700 rounded" />
                  <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-1/2" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">
                Failed to load products
              </p>
              <button
                onClick={() => setRetry((r) => r + 1)}
                className="px-5 py-2 rounded bg-black text-white"
              >
                Retry
              </button>
            </div>
          )}

          {/* Data */}
          {!loading && !error && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/60 dark:bg-white/5 rounded-xl p-4 hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 mx-auto object-contain"
                  />
                  <h3 className="mt-4 text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-bold">${item.price}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-6 text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} IEEE Dholakpur
        </div>
      </footer>
    </div>
  );
}
