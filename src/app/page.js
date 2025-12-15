"use client";
import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold text-blue-600 py-2">
          IEEE Component Library
        </h1>
        <p className="text-lg text-gray-600">
          Demonstrating reusable UI components (Issue #27).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          <Card title="Reusable Card 1">
            This content is wrapped inside our generic <code>Card</code> component.
          </Card>
          <Card title="Reusable Card 2">
            <Input label="Demo Input Field" placeholder="Type something..." />
          </Card>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Button variant="primary" onClick={() => alert("Primary Clicked")}>Primary Action</Button>
          <Button variant="danger" onClick={() => setModalOpen(true)}>Open Modal</Button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Success">
          <p>You successfully opened the Modal component!</p>
          <div className="mt-4 flex justify-end">
            <Button variant="primary" onClick={() => setModalOpen(false)}>Close</Button>
          </div>
        </Modal>
      </main>
    </div>
  );
}