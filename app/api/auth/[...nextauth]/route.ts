import NextAuth, {NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient} from '@prisma/client';
import { getUserWithAccounts } from '@/lib/user';

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile: async (profile) => {
                const email = profile.email;
                const userWithAccount = await getUserWithAccounts(email);
                
                if (userWithAccount && userWithAccount.accounts[0].provider !== 'google') {
                    throw new Error("User with this email already exists.");
                }

                return {
                    id: profile.sub,
                    email: profile.email,
                    name: profile.name,
                    image: profile.picture,
                    role: 'user'
                };
            }
        })
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
        async signIn({ user, account, profile }) {
            const email = user.email;

            const existingUser = await getUserWithAccounts(email!);

            if (existingUser) {
                const hasSameProvider = existingUser.accounts.some((acc) => acc.provider === account?.provider);

                if (hasSameProvider) {
                    return true;
                } else {
                    return '/auth/error';
                }
            }
            return true;
        },
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    debug: process.env.NODE_ENV === 'development'
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };