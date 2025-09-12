import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function AuthLayout({ children }) {
  return (
    <div className={`${inter.className} antialiased`}>
     
      {children}
    </div>
  );
}
