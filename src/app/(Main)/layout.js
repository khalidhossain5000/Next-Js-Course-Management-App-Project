"use client"
import "../globals.css";
import { Inter } from "next/font/google";
import NavBar from "../Components/NavBar/NavBar";
import { SessionProvider } from "next-auth/react";



// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // recommended for performance
});




export default function MainLayout({ children }) {
  
  return (
    
      <div
        className={`${inter.className} antialiased`}
      >
        <SessionProvider>
        <header>
          <NavBar/>
        </header>
        {children}
        </SessionProvider>
      </div>
   
  );
}
