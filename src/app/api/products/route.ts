import prisma from '@/libs/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/authOptions';

export async function POST(request: Request) {

    const data = await request.json();

    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ error: 'You must be logged in to create a product', status: 401 })
    }

    const newProduct = await prisma.product.create({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price),
            image: data.image,
            authorId: session.user.id

        }
    })

    console.log(newProduct)

    return NextResponse.json(newProduct)
}
