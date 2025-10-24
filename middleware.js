import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([ //createRouteMatcher -- A utility to define which routes require authentication.
  "/dashboard(.*)",
  "/expenses(.*)",
  "/friends(.*)",
  "/groups(.*)",
  "/person(.*)",
  "/settlements(.*)",
]);


export default clerkMiddleware(async (auth, req) => { // clerkMiddleware : It wraps your middleware logic and gives you access to the current authenticated user auth().
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) { //If user is NOT logged in and tries to access a protected route:
    const { redirectToSignIn } = await auth();
    return redirectToSignIn(); // Sends them to login page
  }

  return NextResponse.next(); //If user is logged in OR route isn’t protected: Continue normally
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
  runtime: "nodejs",
};