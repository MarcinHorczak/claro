import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/auth/admin")) {
          return !!token;
        }
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/auth/admin/:path*"],
};
