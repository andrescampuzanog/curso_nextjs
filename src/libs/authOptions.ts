import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/libs/prisma"
import bcrypt from "bcrypt"
import { AuthOptions } from "next-auth"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
            },
            async authorize(credentials) {

                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                // This is an example of how to authenticate with a third-party
                // const res = fetch("http://api.mibackend.com/api/auth/signin", {
                //     method: "POST",
                //     headers: {},
                //     body: JSON.stringify(credentials)
                /// })
                
                const userFound = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if (!userFound) {
                    throw new Error("Invalid credentials");
                }

                const matchPassword = await bcrypt.compare(password, userFound.password)

                if (!matchPassword) {
                    throw new Error("Invalid credentials");
                }

                return {
                    id: userFound.id,
                    name: userFound.name,
                    email: userFound.email,
                    lastName: userFound.lastname,
                    role: userFound.role,
                    confirmed_email: userFound.confirmed,
                };
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token = { ...token, ...user }
            }

            return token
        },
        async session({ session, token }) {

            if (token) {
                session.user = {...session.user, ...token}
            }

            return session
        },

    },
    pages: {
        "signIn": "/auth/login",
    },
}