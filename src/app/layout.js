import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Good Morning Technology | Cloud & AI Consulting",
  icons: {
    icon: "/favicon.ico",               // default
    shortcut: "/favicon.png",     // modern browsers
    apple: "/apple-touch-icon.png",     // iOS home screen
  },
  description:
    "Good Morning Technology helps businesses harness cloud computing, AI, and modern IT solutions. We deliver scalable infrastructure, automation, and innovation for growth-focused organizations.",
  keywords: [
    "Good Morning Technology",
    "cloud consulting",
    "AI solutions",
    "DevOps services",
    "IT infrastructure",
    "digital transformation",
    "Los Angeles website design",
  ],
  authors: [{ name: "Kaleb Franken", url: "https://goodmorningtechnology.com" }],
  openGraph: {
    title: "Good Morning Technology | Cloud & AI Consulting",
    description:
      "Empowering businesses with cloud, AI, and digital transformation. Partner with Good Morning Technology for innovation and growth.",
    url: "https://goodmorningtechnology.com",
    siteName: "Good Morning Technology",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://goodmorningtechnology.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Good Morning Technology - Cloud & AI Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Morning Technology | Cloud & AI Consulting",
    description:
      "We help businesses scale smarter with cloud, AI, and modern IT consulting. Start your digital transformation today.",
    creator: "@GoodMorningTech",
    images: ["https://goodmorningtechnology.com/og-image.jpg"],
  },
  metadataBase: new URL("https://goodmorningtechnology.com"),
  alternates: {
    canonical: "https://goodmorningtechnology.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
