
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
const prisma = new PrismaClient()

export default async function realEstate() {
  const properties = await prisma.real_states.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })


  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <Nav></Nav>

      <div className="flex-1 flex flex-col gap-10 mb-10 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">Propiedades</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <Card key={index}>
              <CardHeader className="text-xl font-bold">
                {property.title}
              </CardHeader>
              <CardContent>{property.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
