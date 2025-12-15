import React from 'react';

export default function Card({ children, className = '', hover = false, ...props }) {
    return (
        <div
            className={`
        bg-white/70 dark:bg-white/5 
        backdrop-blur-md 
        border border-gray-200/50 dark:border-white/10 
        rounded-2xl 
        shadow-sm 
        ${hover ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''} 
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
}
