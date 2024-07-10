import Nav from "@/components/Nav";
import { PrismaClient } from "@prisma/client";
import { Link } from "lucide-react";
const prisma = new PrismaClient();

export default async function RealStatePage({ params }: { params: { id: string } }) {

  const property = await prisma.real_states.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  return (
    <div>
      <Nav></Nav>
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8 ">
        <div className="mt-4 flex flex-col self-center">
          {property ? (
            <div key={property.id} className="border p-4 rounded">
              <h2 className="text-4xl font-bold">{property.title}</h2>
              {/* {property.url ? <Image src={property.url} alt={property.title} width={500} height={500} className="object-cover rounded-lg w-full h-96" /> : null} */}
              <p className="mt-4">{property.description}</p>{
                (property.price != null && property.price > 0) ?
                  <p className="mt-4">Precio: ${property.price}</p> : null}
              <p className="mt-4">Estado: {property.state}</p>
              <p className="mt-4">Ciudad: {property.location}</p>
              <p className="mt-4">Ubicación: {property.street}</p>
              <Link href={property.url?? '/'} className="mt-4">Link: {property.url}</Link>
            </div>
          ) : (
            <p className="text-4xl font-bold">Property not found</p>
          )}
        </div>
      </div>
    </div>
  )

}
