import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_TITLE = "Darey Olowo — Frontend & Web3 Developer";
const SITE_DESCRIPTION =
  "Portfolio of Darey Olowo, a frontend and web3 developer building modern, responsive web applications with React, Next.js, Tailwind CSS and smart contracts in Solidity and Cairo.";
const SOCIAL_DESCRIPTION =
  "Frontend and web3 developer building production-grade web apps, dashboards, and on-chain products across Solana, Stellar, Celo and Base.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dareyolowo.vercel.app",
  ),
  title: {
    default: SITE_TITLE,
    template: "%s · Darey Olowo",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Darey Olowo",
    "Frontend Developer",
    "Web3 Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Solidity",
    "Cairo",
    "Starknet",
    "Solana",
    "Stellar",
    "Portfolio",
  ],
  authors: [{ name: "Darey Olowo" }],
  creator: "Darey Olowo",
  publisher: "Darey Olowo",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    type: "website",
    siteName: "Darey Olowo",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    creator: "@Olowodarey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
