import "./globals.css";
import { GlobalProvider } from "../context/GlobalStore";

export const metadata = {
  title: "IEEE PatchFest Tech Challenge",
  description: "Global State Management implementation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}