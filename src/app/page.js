import Image from "next/image";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Main Content Area */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        
        {/* Animated Heading */}
        <h1 className="text-4xl font-bold animate-fade-up">
          IEEE PatchFest Tech Challenge
        </h1>
        
        {/* Animated Paragraph with delay */}
        <p className="text-lg animate-fade-up delay-100">
          Welcome to the challenge! Start by checking the issues list.
        </p>

        {/* Animated Buttons/Action Area with more delay */}
        <div className="flex gap-4 justify-center sm:justify-start animate-fade-up delay-200">
          <a 
            href="https://github.com/IEEE-PatchFest/tech/issues" 
            target="_blank"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            View Issues
          </a>
          <a 
             href="#testimonials"
             className="rounded-full border border-gray-300 px-6 py-2 hover:bg-gray-100 transition-colors dark:hover:bg-gray-800"
          >
            See Testimonials
          </a>
        </div>

        {/* Testimonials Component appearing last */}
        <div className="animate-fade-up delay-300 w-full">
          <Testimonials /> 
        </div>
        
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center animate-fade-up delay-300">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}