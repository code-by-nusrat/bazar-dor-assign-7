

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth';

// Top-level pages that must stay public (add yours here)
const PUBLIC_ROUTES = [
    '/sign-in',
    '/sign-up',
    '/about',
    '/contact',
    '/products',
];

export async function proxy(request: NextRequest) {
    const { pathname, search } = request.nextUrl;

    if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session) {
        const signInUrl = new URL('/sign-in', request.url);
        signInUrl.searchParams.set('callbackUrl', pathname + search);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}

export const config = {
    // One path segment only, e.g. /sorno-machi-chal (the home page "/" is not matched)
    matcher: ['/:slug'],
};