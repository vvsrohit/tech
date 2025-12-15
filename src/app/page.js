import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        
        {/* Optimized Image Component for #19 */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-4xl font-bold">
          IEEE PatchFest Tech Challenge
        </h1>
        
        <p className="text-lg">
          We are using the &lt;Image /&gt; component for optimized loading! 🚀
        </p>

        <div className="flex gap-4 justify-center sm:justify-start">
          <a 
            href="https://github.com/IEEE-PatchFest/tech/issues" 
            target="_blank"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            View Issues
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm opacity-75">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}