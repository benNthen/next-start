/* Middleware is used to inspect and redirect client requests - not used in this project but its good 
to know about it. You can inspect via the terminal after npm run dev is entered. */
import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log(request)
  return NextResponse.next()
}

// Filter - more details at https://nextjs.org/docs/app/api-reference/file-conventions/middleware#matcher
export const config = {
  matcher: '/news',
}
