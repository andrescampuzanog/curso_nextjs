import NextAuth from "next-auth";
import { string } from "zod";

declare module "next-auth" {

    interface Session {
        user: {
            name: string
            email: string
            image: string
            id: number
            lastname: string
            role: string
            confirmed: boolean
        }
    }
}