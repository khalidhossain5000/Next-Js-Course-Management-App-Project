import DashboardHome from "./DashboardHome/DashboardHome";

export const metadata = {
  title: "Dashboard | Dream LMS",
  description:
    "Access your personal dashboard on Dream LMS. Manage your courses, track progress, and stay updated with your learning activities.",
  openGraph: {
    title: "Dashboard | Dream LMS",
    description:
      "Access your personal dashboard on Dream LMS. Manage your courses, track progress, and stay updated with your learning activities.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <DashboardHome/>
    </div>
  );
}
