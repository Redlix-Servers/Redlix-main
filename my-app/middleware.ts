import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Only process requests starting with /admin
    if (pathname.startsWith("/admin")) {
        // 2. Allow requests to the login page itself
        if (pathname === "/admin/login") {
            return NextResponse.next();
        }

        // 3. Check for the admin token
        const token = request.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default_secret");
            await jwtVerify(token, secret);
            return NextResponse.next();
        } catch (error) {
            console.error("Auth Middleware Error:", error);
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    // Protect administrative APIs as well
    if (pathname.startsWith("/api/admin")) {
        // Allow the login API itself
        if (pathname === "/api/admin/login") {
            return NextResponse.next();
        }

        const token = request.cookies.get("admin_token")?.value;
        if (!token) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default_secret");
            await jwtVerify(token, secret);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.json({ success: false, message: "Invalid session" }, { status: 401 });
        }
    }

    return NextResponse.next();
}

// Ensure middleware only runs where necessary
export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};
