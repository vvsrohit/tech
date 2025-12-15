import "./globals.css";
import ErrorBoundary from "../components/ErrorBoundary";

export const metadata = {
  title: "IEEE PatchFest Tech Challenge",
  description: "A collaborative hackathon project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}