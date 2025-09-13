"use client";
import "../globals.css";
import { Inter } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import DashboardShell from "../Components/DashboardShell/DashboardShell";

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
        <DashboardShell>
          {children}
        </DashboardShell>
        
        <footer></footer>
      </SessionProvider>
    </div>
  );
}
