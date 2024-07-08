'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function deleteRS(formdata){
    const id = parseInt(formdata.get('id'));
    try{
        await prisma.realEstate.delete({
            where: {
                id
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.error(error);
    }
}