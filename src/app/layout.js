"use client"
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // recommended for performance
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
              padding: "12px 18px",
              fontWeight: "500",
            },
          }}
        />
        </SessionProvider>
      </body>
    </html>
  );
}
