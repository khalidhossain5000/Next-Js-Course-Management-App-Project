import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  
  const protectedPaths = ["/all-courses/:path*","/Dashboard","/Dashboard/:path*"]; //protected page route

  const url = req.nextUrl.clone();
  
  // request path protectedPaths
  if (protectedPaths.some((path) => url.pathname.startsWith(path))) {
  
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
console.log('THIS IS TOKEN MIDDLEWARE',token,url);
    if (!token) {
      // logged out user → redirect to login
      url.pathname = "/Auth/Login";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/all-courses/:path*","/Dashboard","/Dashboard/:path*"], // 
};
