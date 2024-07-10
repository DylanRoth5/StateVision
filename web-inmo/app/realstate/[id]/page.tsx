import Nav from "@/components/Nav";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function RealStatePage({params}: {params: {id: string}}) {
  
    const property = await prisma.real_states.findUnique({
      where: {
        id: parseInt(params.id)
      }
    });

    return(
        <div>
          <Nav></Nav>
          <h1>{property ? property.title : 'Property not found'}</h1>
          <p>{property ? property.description : 'Property not found'}</p>
        </div>
    )
  
}