import prisma from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(request:Request){
    
    const data = await request.json();

    const newProduct = await prisma.product.create({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price),
            image: data.image
        }
    })

    console.log(newProduct)

    return NextResponse.json(newProduct)
}
