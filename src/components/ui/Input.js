import React from 'react';

export default function Input({ label, error, className = '', id, ...props }) {
    const inputId = id || React.useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`
          flex h-10 w-full rounded-lg 
          border border-slate-200 dark:border-slate-800 
          bg-white dark:bg-slate-950 
          px-3 py-2 text-sm 
          placeholder:text-slate-500 dark:placeholder:text-slate-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
          disabled:cursor-not-allowed disabled:opacity-50 
          transition-all duration-200
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} 
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1.5 text-xs text-red-500 animate-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
}
