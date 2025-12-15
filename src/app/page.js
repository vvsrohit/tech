'use client';
import { useState } from 'react';
import Image from "next/image";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="page-root min-h-screen font-sans bg-gray-50 dark:bg-black text-slate-900 dark:text-slate-100">
      <header className="site-header bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-40">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/globe.svg" alt="IEEE Dholakpur" width={44} height={44} />
            <div>
              <div className="text-lg font-semibold">IEEE Dholakpur</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Tech Summit · Community Meetup · Dec 2026</div>
            </div>
          </div>
          <nav className="flex items-center gap-4 hidden sm:flex">
            <a href="#schedule" className="text-sm hover:underline">Schedule</a>
            <a href="#speakers" className="text-sm hover:underline">Speakers</a>
            <Button onClick={handleRegister} size="sm">Register</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-12">
        <section className="hero grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">IEEE Dholakpur — Build the future.</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">Join local engineers, students, and entrepreneurs for two days of talks, hands-on workshops, and a community hackathon. Learn from practitioners and ship something cool.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={handleRegister} size="lg">Get Tickets</Button>
              <Button href="#schedule" variant="outline" size="lg">View Schedule</Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              <Card className="p-4" hover>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Workshops</div>
                <div className="font-semibold text-lg">3 Tracks</div>
              </Card>
              <Card className="p-4" hover>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Hackathon</div>
                <div className="font-semibold text-lg">Team & Solo</div>
              </Card>
              <Card className="p-4" hover>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Networking</div>
                <div className="font-semibold text-lg">Mentors</div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[20px] blur-3xl -z-10" />
            <Image src="/file.svg" alt="illustration" width={500} height={350} className="rounded-[20px] shadow-2xl rotate-1 hover:rotate-0 transition-all duration-500" />
          </div>
        </section>

        <section id="schedule" className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
            <span className="text-sm text-slate-500 bg-slate-100 dark:bg-white/10 px-3 py-1 rounded-full">Coming Soon</span>
          </div>
          <Card className="p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">Day 1</span>
                <span className="text-slate-700 dark:text-slate-300">Keynotes, Hands-on Workshops, and Lighting Talks</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">Day 2</span>
                <span className="text-slate-700 dark:text-slate-300">Community Hackathon, Project Demos, and Awards Ceremony</span>
              </li>
            </ul>
          </Card>
        </section>

        <section id="speakers" className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="p-6" hover>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">PS</div>
              <div className="text-xl font-bold">Dr. Priya Saxena</div>
              <div className="text-sm text-slate-500">AI Researcher</div>
            </Card>
            <Card className="p-6" hover>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xl">KM</div>
              <div className="text-xl font-bold">Karan Mehta</div>
              <div className="text-sm text-slate-500">Cloud Architect</div>
            </Card>
            <Card className="p-6" hover>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-xl">NV</div>
              <div className="text-xl font-bold">Nisha Verma</div>
              <div className="text-sm text-slate-500">Product Manager</div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="site-footer border-t border-gray-200 dark:border-zinc-800 mt-20">
        <div className="max-w-[1100px] mx-auto px-6 py-8 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <div>© {new Date().getFullYear()} IEEE Dholakpur</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Code of Conduct</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Join the Waitlist">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks for registering!'); setModalOpen(false); }}>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Tickets are released in batches. Sign up to get notified when the next batch drops using our secure system.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="Jane" required />
            <Input label="Last Name" placeholder="Doe" />
          </div>
          <Input label="Email Address" type="email" placeholder="jane@example.com" required />
          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
