import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./Components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // recommended for performance
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        
        <header>
          <NavBar/>
        </header>
        {children}
      </body>
    </html>
  );
}
