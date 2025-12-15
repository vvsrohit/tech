import React from 'react';
import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg shadow-blue-500/20",
        secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
        outline: "border border-slate-200 text-slate-700 hover:bg-slate-50 focus:ring-slate-200 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5",
        ghost: "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5",
        destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    };

    const sizes = {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-5 py-2.5",
        lg: "text-base px-6 py-3.5",
        icon: "p-2.5",
    };

    const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
