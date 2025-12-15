import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* The Floating Toggle Button */}
      <ThemeToggle />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold">
          IEEE PatchFest Tech Challenge
        </h1>
        
        <p className="text-lg">
          Welcome to the challenge! Toggle the theme to see the magic. 🌙
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