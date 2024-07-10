'use server'
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function addNews(formdata){
    const title = formdata.get('title') ? formdata.get('title') : 'null';
    const description = formdata.get('description') ? formdata.get('description') : 'null';
    const image = formdata.get('image') ? formdata.get('image') : 'null';
    const url = formdata.get('url') ? formdata.get('url') : 'null';
    try{
        await prisma.news.create({
            data: {
                title,
                description,
                image,
                url,
                updatedAt: new Date()
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.error(error);
    }
}