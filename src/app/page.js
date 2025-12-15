"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-root min-h-screen font-sans bg-gray-50 dark:bg-black text-slate-900 dark:text-slate-100">
      <header className="site-header bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/globe.svg" alt="IEEE Dholakpur" width={44} height={44} />
            <div>
              <div className="text-lg font-semibold">IEEE Dholakpur</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Tech Summit · Community Meetup · Dec 2026
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#schedule" className="text-sm hover:underline">
              Schedule
            </a>
            <a href="#speakers" className="text-sm hover:underline">
              Speakers
            </a>
            <a href="#contact" className="btn btn-primary text-sm">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* HERO SECTION (unchanged) */}
        <section className="hero grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              IEEE Dholakpur — Build the future
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Join local engineers, students, and entrepreneurs for two days of
              talks, hands-on workshops, and a community hackathon.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/file.svg" alt="illustration" width={480} height={320} />
          </div>
        </section>

        {/* CONTACT FORM */}
        <section
          id="contact"
          className="mt-16 max-w-xl bg-white/60 dark:bg-white/5 p-6 rounded shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-black"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button
              type="submit"
              className="btn btn-primary mt-2"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
