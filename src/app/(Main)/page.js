import HomePage from "./Home/HomePage";
 // app/page.tsx
  export const metadata = {
  title: "Home | Dream LMS",
  description:
    "Welcome to Dream LMS Home. Browse and learn courses online with our full-stack Next.js course management app.",
      icons: {
    icon: "/favicon.svg", // <-- এখানে svg path
  },
  openGraph: {
    title: "Home | Dream LMS",
    description:
      "Welcome to Dream LMS Home. Browse and learn courses online with our full-stack Next.js course management app.",
    type: "website",
  },
};
export default function Home() {
 
  return (
    <div>
      <HomePage/>
    </div>
  );
}
