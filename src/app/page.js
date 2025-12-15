"use client";
import StateController from "../components/StateController";
import { useGlobalStore } from "../context/GlobalStore";

export default function Home() {
  const { fontSize } = useGlobalStore();

  // Map state values to Tailwind classes
  const fontClass = {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
  }[fontSize] || "text-base";

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl mx-auto flex flex-col gap-8">
        
        <StateController />

        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-blue-600">
            No NPM? No Problem.
          </h1>
          
          <p className={`${fontClass} leading-relaxed p-6 rounded-lg border border-dashed border-gray-400`}>
            This application is now using a <b>Custom Global Store</b> built with React Context API.
            <br/><br/>
            We implemented state persistence, global theme toggling, and font resizing without installing a single external package.
            <br/><br/>
            This is how you write lean, dependency-free code! 🚀
          </p>
        </div>
      </main>
    </div>
  );
}