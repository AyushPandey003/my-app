import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import type { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
    _id: string;
  }

  interface User {
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // Google Sign-In
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      async profile(profile) {
        // Find or create a user based on Google profile info
        await connectDB();
        let user = await User.findOne({ email: profile.email });

        if (!user) {
          // If user does not exist, create a new one
          user = await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
            provider: "google",
          });
        }

        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),

    // Credentials-based Sign-In
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user information in the JWT token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the user info to the session
      if (token) {
        if (session.user) {
          session.user.id = token.id as string;
          session.user.email = token.email as string;
          session.user.name = token.name as string;
        }
      }
      return session;
    },
  },
};
