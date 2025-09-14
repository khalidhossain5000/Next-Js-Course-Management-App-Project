"use client";
import "../globals.css";
import { Inter } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import DashboardShell from "../Components/DashboardShell/DashboardShell";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // recommended for performance
});
const queryClient = new QueryClient();

export default function AdminLayout({ children }) {
  return (
    <div className={`${inter.className} antialiased`}>
      
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
        <DashboardShell>
          {children}
        </DashboardShell>
        
       </QueryClientProvider>
      </SessionProvider>
      
    </div>
  );
}
