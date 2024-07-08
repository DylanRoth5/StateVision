'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function register(formdata){
    const name = formdata.get('name') ? formdata.get('name') : 'null';
    const email = formdata.get('email') ? formdata.get('email') : 'null';
    const password = formdata.get('password') ? formdata.get('password') : 'null';
    const role = formdata.get('role') ? formdata.get('role') : 'anon';
    const profile_image = formdata.get('profile_image') ? formdata.get('profile_image') : 'null';
    try{
        await prisma.user.create({
            data: {
                name,
                email,
                password,
                role,
                profile_image
            }
        })
    } catch (error) {
        console.error(error);
    }
}