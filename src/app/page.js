import DataFetcher from "../components/DataFetcher";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center">
      
      <main className="flex flex-col gap-8 items-center text-center w-full">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 py-2">
          Live API Data
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl">
          Fetching real data from <code>jsonplaceholder</code> with skeleton loading states and error handling (Issue #25).
        </p>

        {/* The Component handles everything itself */}
        <DataFetcher />

      </main>

      <footer className="mt-16 text-sm opacity-50">
        <p>Built for the IEEE PatchFest Hackathon</p>
      </footer>
    </div>
  );
}