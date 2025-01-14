import type { Metadata, Viewport } from "next";
import { Calistoga, Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio Template",
  description: "A portfolio template for developers",
  authors: [{ name: "Iman Talebizadeh" }],
  creator: "Iman Talebizadeh",
  generator: "Next.js",
  keywords: ["portfolio", "template", "nextjs", "tailwindcss"],
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-inter text-white antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
