import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import Link from 'next/link';
import Galery from '@/components/galery';
const prisma = new PrismaClient()

export default async function realEstate() {
  const properties = await prisma.real_states.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <Nav />
      <Galery title="Propiedades" type="realstate" itemsArray={properties} />
      <Footer />
    </div>
  );
}
