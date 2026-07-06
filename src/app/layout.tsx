import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Darey Olowo — Frontend & Web3 Developer",
  description:
    "Portfolio of Darey Olowo, a frontend and web3 developer building modern, responsive web applications with React, Next.js, Tailwind CSS and smart contracts in Solidity and Cairo.",
  keywords: [
    "Darey Olowo",
    "Frontend Developer",
    "Web3 Developer",
    "React",
    "Next.js",
    "Solidity",
    "Cairo",
    "Starknet",
  ],
  authors: [{ name: "Darey Olowo" }],
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    title: "Darey Olowo — Frontend & Web3 Developer",
    description:
      "Frontend and web3 developer building modern web applications and smart contracts.",
    type: "website",
    images: ["/profilepic.jpeg"],
  },
  twitter: {
    card: "summary",
    title: "Darey Olowo — Frontend & Web3 Developer",
    description:
      "Frontend and web3 developer building modern web applications and smart contracts.",
    images: ["/profilepic.jpeg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
