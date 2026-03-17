import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0xAurora — Web3 Developer & DeFi Builder",
  description:
    "CS student, Web3 developer, and DeFi trader. Building Roomly and on-chain arbitrage systems on Ethereum mainnet.",
  keywords: [
    "Web3",
    "Blockchain",
    "Solidity",
    "DeFi",
    "Next.js",
    "Nigeria",
    "Developer",
  ],
  authors: [{ name: "0xAurora" }],
  openGraph: {
    title: "0xAurora — Web3 Developer & DeFi Builder",
    description: "Building onchain. Always.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#080808]">
      <body className={`${geistMono.variable} antialiased bg-[#080808]`}>
        {children}
      </body>
    </html>
  );
}
