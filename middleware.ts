import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/auth/signin",
    },
    callbacks:{
        authorized: async ({req, token}) => {
            const { pathname } = req.nextUrl;

            const guestPaths = ['/auth/signin', '/auth/signup'];
            const isGuestPath = guestPaths.some(path => pathname.startsWith(path));

            if (isGuestPath) {
                return !token;
            }

            if(req.nextUrl.pathname.startsWith("/admin")) return token?.role === "admin"
            return !!token
        },
    },
});

export const config = { matcher: ['/admin:path*', '/auth/signin', '/auth/signup'] };