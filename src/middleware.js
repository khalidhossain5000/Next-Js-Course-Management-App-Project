// src/middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedPaths = ["/Dashboard", "/courses"];

export async function middleware(req) {
  const url = req.nextUrl;
  const { pathname } = url;

  // চেক করবো path protected কিনা
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtected) {
    // NextAuth এর টোকেন বের করবো
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // যদি লগইন না করা থাকে → login এ redirect
    if (!token) {
      url.pathname = "/Auth/Login"; // তোমার login page
      return NextResponse.redirect(url);
    }
  }

  // allow the request
  return NextResponse.next();
}

// কোন কোন route এ middleware চলবে সেটা matcher দিয়ে বলে দিচ্ছি
export const config = {
  matcher: ["/Dashboard/:path*", "/courses/:path*"],
};
