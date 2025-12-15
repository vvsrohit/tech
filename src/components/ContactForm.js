"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("invalid-email");
      return;
    }
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-10 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded text-gray-900" 
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded text-gray-900" 
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded text-gray-900 h-32" 
            value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Send Message
        </button>
        {status === "success" && <p className="text-green-600 text-center text-sm">✅ Sent!</p>}
        {status === "error" && <p className="text-red-600 text-center text-sm">⚠️ Fill all fields.</p>}
        {status === "invalid-email" && <p className="text-red-600 text-center text-sm">⚠️ Invalid email.</p>}
      </form>
    </section>
  );
}