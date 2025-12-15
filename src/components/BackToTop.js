"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 2. Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 z-50"
          aria-label="Back to Top"
        >
          {/* Simple Arrow Up Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}