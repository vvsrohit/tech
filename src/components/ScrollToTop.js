'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
        fixed bottom-8 right-8 z-50 
        flex items-center justify-center
        w-12 h-12 rounded-full 
        bg-blue-600 text-white shadow-lg shadow-blue-600/20
        transition-all duration-300 ease-out
        hover:bg-blue-700 hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:bg-blue-500 dark:hover:bg-blue-400
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
      `}
        >
            <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    );
}
