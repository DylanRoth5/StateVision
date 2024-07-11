import Nav from "@/components/Nav";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
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
            <div key={property.id} className="border p-4 rounded grid grid-cols-1 md:grid-cols-2">
              {property.image_url ? <Image src={property.image_url} alt={property.title} width={500} height={500} className="object-cover w-full rounded-lg " /> : null}
              <div className="p-4">
                <h2 className="text-4xl font-bold my-2">{property.title}</h2>
                <p className="mt-4">{property.description}</p>{
                  (property.price != null && property.price > 0) ?
                    <p className="mt-4">Precio: ${property.price}</p> : null}
                <p className="mt-4">Estado: {property.state}</p>
                <p className="mt-4">Ciudad: {property.location}</p>
                <p className="mt-4">Ubicación: {property.street}</p>
                <Link href={property.url ?? '/'} className="mt-4">Link: {property.url.slice(0, 40)}{property.url.length > 40 ? '...' : ''}</Link>
              </div>
            </div>
          ) : (
            <p className="text-4xl font-bold">Property not found</p>
          )}
        </div>
      </div>
    </div>
  )

}
