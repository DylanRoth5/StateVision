import React from "react";
import NavBar from "../../../components/NavBar";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function HomeRoute({params}: {params: {id: string}}) {
  
  const property = await prisma.realEstate.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  const navLinks = [
    { url: '/', text: 'Home' },
    { url: '/properties', text: 'Properties' },
    { url: '/#about', text: 'About' },
    { url: '/dashboard', text: 'Dashboard' },
  ];

  return (
    <div>
      <NavBar links={navLinks}></NavBar>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 shadow overflow-hidden flex sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            {
              property.url ? <Image src={property.url} alt={property.title} width={500} height={500} className="object-cover rounded-lg w-96 h-96" ></Image> : null
            }
          </div>
          <div className="grid grid-col-1 px-4 py-5 sm:p-0">
            <div className="p-6 ">
              <h2 className="text-3xl font-bold leading-6 tracking-wide">{property.title}</h2>
              <p className="mt-2 text-xl leading-6 text-gray-500">{property.description}</p>
            </div>
            <div className="px-4 py-3 sm:px-6  grid grid-col-2 align-bottom">
              <div className="sm:flex sm:items-center  sm:justify-between">
                <div className="sm:flex">
                  <span className="mt-2 text-sl text-gray-500">Estado: {property.state}</span>
                </div>
                {
                  property.price? 
                        <div className="mt-2 sm:mt-0 sm:ml-4">
                          <span className="p-2 inline-flex text-xl leading-5 font-semibold rounded-lg bg-green-500 text-green-800">
                            ${property.price}
                          </span>
                        </div> : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
