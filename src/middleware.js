// src/middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedPaths = ["/Dashboard", "/courses","/checkout"];

export async function middleware(req) {
  const url = req.nextUrl;
  const { pathname } = url;

  // check if  path is protected 
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtected) {
    // NextAuth token check
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Login redirect
    if (!token) {
      url.pathname = "/Auth/Login"; 
      return NextResponse.redirect(url);
    }
  }

  // allow the request
  return NextResponse.next();
}

// route middleware will follow and protect
export const config = {
  matcher: ["/Dashboard/:path*", "/courses/:path*","/checkout/:path*"],
};
