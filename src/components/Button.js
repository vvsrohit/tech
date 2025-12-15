export default function Button({
    children,
    variant = 'primary',
    size = 'normal',
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full no-underline transition-colors";

    const variants = {
        primary: "bg-[#0f62fe] text-white hover:bg-[#0353e9]",
        outline: "bg-transparent border border-[#0f62fe]/12 text-[#0f62fe] hover:bg-[#0f62fe]/5 dark:border-white/10 dark:text-slate-300"
    };

    const sizes = {
        normal: "text-sm",
        large: "px-5 py-3.5 font-semibold text-base"
    };

    // Converted .large calculation if needed or mapped roughly 
    // original .large was padding: 0.9rem 1.2rem; font-weight: 600;
    // original .btn was with padding: 0.6rem 1rem;

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || sizes.normal;

    return (
        <a
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}
