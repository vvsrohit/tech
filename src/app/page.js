import Image from "next/image";
import Testimonials from "../components/Testimonials"; // <--- 1. Import it here

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* This is the main content area */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">IEEE PatchFest Tech Challenge</h1>
        <p className="text-lg text-center sm:text-left">
          Welcome to the challenge! Start by checking the issues list.
        </p>

        {/* <--- 2. Use the component here! */}
        <Testimonials /> 
        
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}