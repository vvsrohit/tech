export default function Card({ children, className = '' }) {
    return (
        <div className={`bg-white/60 dark:bg-white/5 rounded shadow-sm ${className}`}>
            {children}
        </div>
    );
}
