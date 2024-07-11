'use server'
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function updateRS(data){

    const id = parseInt(data.get('id'))

    const property = await prisma.real_states.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    const title = data.get('title') ? data.get('title') : property.title;
    const description = data.get('description') ? data.get('description') : property.description;
    const price = data.get('price') ? parseInt(data.get('price')) : property.price;
    const type = data.get('type') ? data.get('type') : property.type;
    const state = data.get('state') ? data.get('state') : property.state;
    const bathrooms = data.get('bathrooms') ? parseInt(data.get('bathrooms')) : property.bathrooms;
    const bedrooms = data.get('bedrooms') ? parseInt(data.get('bedrooms')) : property.bedrooms;
    const location = data.get('location') ? data.get('location') : property.location;
    const street = data.get('street') ? data.get('street') : property.street;
    const covered_square_meters = data.get('covered_square_meters') ? parseInt(data.get('covered_square_meters')) : property.covered_square_meters;
    const total_square_meters = data.get('total_square_meters') ? parseInt(data.get('total_square_meters')) : property.total_square_meters;
    const details = data.get('details') ? data.get('details') : property.details;
    const image_url = data.get('image_url') ? data.get('image_url') : property.image_url;
    const url = data.get('url') ? data.get('url') : property.url;
    try{
        await prisma.real_states.update({
            where: {
                id
            },
            data: {
                title,
                description,
                price,
                type,
                state,
                bathrooms,
                bedrooms,
                location,
                street,
                covered_square_meters,
                total_square_meters,
                details,
                image_url,
                url
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.error(error);
    }
}