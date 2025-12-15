import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* 1. Add the Button Component */}
      <BackToTop />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold">
          IEEE PatchFest Tech Challenge
        </h1>
        
        <p className="text-lg">
          Scroll down to see the "Back to Top" button in action! ⬇️
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

        {/* 2. FORCED HEIGHT FOR SCROLLING TEST */}
        <div className="mt-20 p-8 border border-dashed border-gray-300 rounded-lg w-full text-center">
          <p className="mb-4 text-gray-500">Keep scrolling...</p>
          
          {/* This giant empty space forces the page to be scrollable */}
          <div className="h-[150vh] flex items-end justify-center pb-10">
            <p className="text-gray-500">You reached the bottom! Now click the button ↗️</p>
          </div>
        </div>
        
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm opacity-75">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}