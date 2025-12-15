import "./globals.css";

export const metadata = {
  title: "IEEE PatchFest Tech Challenge",
  description: "A collaborative hackathon project built with Next.js for IEEE PatchFest.",

  openGraph: {
    title: "IEEE PatchFest Tech Challenge",
    description: "Join the challenge and contribute to open source!",
    url: "https://tech-challenge.ieee-patchfest.org",
    siteName: "IEEE PatchFest Tech",
    images: [
      {
        url: "https://ieee-patchfest.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE PatchFest Tech Challenge Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IEEE PatchFest Tech Challenge",
    description: "Join the challenge and contribute to open source!",
    images: ["https://ieee-patchfest.org/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
