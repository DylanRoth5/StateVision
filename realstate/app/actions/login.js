'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function login(formdata){
    const email = formdata.get('email') ? formdata.get('email') : 'null';
    const password = formdata.get('password') ? formdata.get('password') : 'null';
    try{
        await prisma.user.findUnique({
            where: {
                email,
                password
            }
        })
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}