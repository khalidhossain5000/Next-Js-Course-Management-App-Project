import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function AuthLayout({ children }) {
  return (
    <div className={`${inter.className} antialiased`}>
      <h1>This is Auth Layout</h1>
      {children}
    </div>
  );
}
