'use server'
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function updateNews(formdata){
    const id = parseInt(formdata.get('id'))

    const news = await prisma.news.findUnique({
        where: {
            id: parseInt(id)
        }
    })


    const title = formdata.get('title') ? formdata.get('title') : news.title;
    const description = formdata.get('description') ? formdata.get('description') : news.description;
    const image_url = formdata.get('image_url') ? formdata.get('image_url') : news.image_url;
    const url = formdata.get('url') ? formdata.get('url') : news.url;
    try{
        await prisma.news.update({
            where: {
                id
            },
            data: {
                title,
                description,
                image_url,
                url
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.error(error);
    }
}