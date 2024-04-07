import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Email is requiered" }).email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export const registerSchema = z.object({
    name: z.string().min(1, { message: "Name is requiered" }),
    lastname: z.string().min(1, { message: "Last name is requiered" }),
    email: z.string().min(1, { message: "Email is requiered" }).email(),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})