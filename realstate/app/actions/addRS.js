'use server'
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function addRS(formdata){
    const title = formdata.get('title') ? formdata.get('title') : 'null';
    const description = formdata.get('description') ? formdata.get('description') : 'null';
    const price = formdata.get('price') ? parseInt(formdata.get('price')) : 0;
    const type = formdata.get('type') ? formdata.get('type') : 'null';
    const state = formdata.get('state') ? formdata.get('state') : 'null';
    const bathrooms = formdata.get('bathrooms') ? parseInt(formdata.get('bathrooms')) : 0;
    const bedrooms = formdata.get('bedrooms') ? parseInt(formdata.get('bedrooms')) : 0;
    const location = formdata.get('location') ? formdata.get('location') : 'null';
    const street = formdata.get('street') ? formdata.get('street') : 'null';
    const covered_square_meters = formdata.get('covered_square_meters') ? parseInt(formdata.get('covered_square_meters')) : 0;
    const total_square_meters = formdata.get('total_square_meters') ? parseInt(formdata.get('total_square_meters')) : 0;
    const details = formdata.get('details') ? formdata.get('details') : 'null';
    const url = formdata.get('url') ? formdata.get('url') : 'null';
    try{
        await prisma.realEstate.create({
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
                url
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.error(error);
    }
}