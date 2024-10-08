// import { authMiddleware } from '@clerk/nextjs/server'

// export default authMiddleware({
//   ignoredRoutes: ['/api/webhooks/clerk'],
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//     '/'
//   ],
// }

// import { authMiddleware } from "@clerk/nextjs";
// import { authMiddleware } from "@clerk/nextjs/server";
 
// export default authMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk', '/sign-up','/sign-in'],
  
// });
 
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)",'/sign-up','/sign-in'],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { authMiddleware } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([ '/user(.*)','/dashboard','resume/(.*)*'])

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect()
// })
export default authMiddleware({
  ignoredRoutes: ['/api/webhooks(.*)'],
  publicRoutes:['/']
})


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}