import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  if (!request.auth && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
