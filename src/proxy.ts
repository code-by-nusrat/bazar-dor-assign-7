

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { auth } from './lib/auth';

// // Top-level pages that must stay public (add yours here)
// const PUBLIC_ROUTES = [
//     '/sign-in',
//     '/sign-up',
//     '/about',
//     '/contact',
//     '/products',
// ];

// export async function proxy(request: NextRequest) {
//     const { pathname, search } = request.nextUrl;

//     if (PUBLIC_ROUTES.includes(pathname)) {
//         return NextResponse.next();
//     }

//     const session = await auth.api.getSession({
//         headers: request.headers,
//     });

//     if (!session) {
//         const signInUrl = new URL('/sign-in', request.url);
//         signInUrl.searchParams.set('callbackUrl', pathname + search);
//         return NextResponse.redirect(signInUrl);
//     }

//     return NextResponse.next();
// }

// export const config = {
//     // One path segment only, e.g. /sorno-machi-chal (the home page "/" is not matched)
//     matcher: ['/:slug'],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

// Single-segment pages that must stay public
const PUBLIC_PAGES = ['/sign-in', '/sign-up', '/about', '/contact'];

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Public page? Let it through.
    if (PUBLIC_PAGES.includes(pathname)) {
        return NextResponse.next();
    }

    // 2. Is the user logged in? (checks the session cookie)
    const sessionCookie = getSessionCookie(request);

    // 3. Not logged in? Send to sign-in, and remember where they were going.
    if (!sessionCookie) {
        const url = new URL('/sign-in', request.url);
        url.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(url);
    }

    // 4. Logged in? Continue.
    return NextResponse.next();
}

export const config = {
    matcher: ['/:slug'], // only one-segment URLs like /alu, /peyaj
};