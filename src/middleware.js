import { NextResponse } from "next/server"

export function middleware(request) {
  const token = request.cookies.get("access_token")?.value
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/login")) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
}
