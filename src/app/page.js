import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left w-full">
        <h1 className="text-4xl font-bold self-center">
          IEEE PatchFest Tech Challenge
        </h1>
        
        <p className="text-lg self-center">
          See what other participants are saying about the challenge.
        </p>

        {/* Render the Testimonials Section */}
        <Testimonials />
        
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm opacity-75">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}