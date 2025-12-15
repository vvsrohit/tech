import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left max-w-2xl">
        
        {/* Refactored: Using .heading-hero class */}
        <h1 className="heading-hero">
          IEEE PatchFest Tech Challenge
        </h1>
        
        {/* Refactored: Using .text-body class */}
        <p className="text-body">
          Welcome! We have refactored our CSS to use a scalable component system (Issue #26). 
          The code is now cleaner and easier to maintain.
        </p>

        <div className="flex gap-4 justify-center sm:justify-start flex-wrap">
          {/* Refactored: Using .btn and .btn-primary classes */}
          <a 
            href="https://github.com/IEEE-PatchFest/tech/issues" 
            target="_blank"
            className="btn btn-primary"
          >
            View Issues
          </a>

          {/* Refactored: Using .btn and .btn-secondary classes */}
          <a 
            href="https://github.com/IEEE-PatchFest/tech"
            target="_blank"
            className="btn btn-secondary"
          >
            View Repository
          </a>
        </div>
        
        {/* Example of a Card using the new system */}
        <div className="card w-full mt-8 text-left">
          <h3 className="font-bold text-xl mb-2">Refactoring Status</h3>
          <p className="text-sm opacity-75">
            ✅ Tailwind `@apply` directives used.<br/>
            ✅ Global styles centralized.<br/>
            ✅ Inline clutter reduced.
          </p>
        </div>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm opacity-50">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}