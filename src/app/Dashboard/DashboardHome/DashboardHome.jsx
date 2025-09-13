"use client";
import "../globals.css";
import { Inter } from "next/font/google";

import { SessionProvider } from "next-auth/react";

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // recommended for performance
});

export default function AdminLayout({ children }) {
  return (
    <div className={`${inter.className} antialiased`}>
      <SessionProvider>
        <header></header>
        {children}
        <footer></footer>
      </SessionProvider>
    </div>
  );
}
