import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {

    const data = await request.json()
    data.password = await bcrypt.hash(data.password, 10);

    console.log(data);
    await prisma.user.create({
        data: {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        }
    })


    return NextResponse.json({});
}