import Navbar from "./../../components/NavBar";
import { PrismaClient } from "@prisma/client";
import addRS from "../actions/addRS";
import deleteRS from "../actions/deleteRS";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function Dashboard() {

  const properties = await prisma.realEstate.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  const navLinks = [
    { url: '/', text: 'Home' },
    { url: '/properties', text: 'Properties' },
    { url: '/#about', text: 'About' },
    { url: '#dashboard', text: 'Dashboard' },
  ];


  return (
    <main>
      <Navbar links={navLinks} />

      <div id="dashboard" className="bg-amber-700 w-full flex justify-center">
        <div className="w-2/3 justify-center flex flex-col p-4">
          <h1 className="text-2xl font-bold">Properties</h1>
          <form action={addRS} className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              <input className="p-2 rounded-xl bg-black mx-2" type="text" name="title" placeholder="Title" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="text" name="description" placeholder="Description" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="number" name="price" placeholder="Price" id="" />
              <select className="p-2 rounded-xl bg-black mx-2" name="type" id="">
                <option value="null">Type</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Casa de Campo">Casa de Campo</option>
                <option value="Campo">Campo</option>
              </select>
              <select className="p-2 rounded-xl bg-black mx-2" name="state" id="">
                <option value="null">State</option>
                <option value="SE VENDE">SE VENDE</option>
                <option value="SE ALQUILA">SE ALQUILA</option>
                <option value="SE ARRIENDA">SE ARRIENDA</option>
                <option value="SE PERMUTA">SE PERMUTA</option>
                <option value="OPCIONES DE ALQUILER">OPCIONES DE ALQUILER</option>
              </select>
              <input className="p-2 rounded-xl bg-black mx-2" type="number" name="bathrooms" placeholder="Bathrooms" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="number" name="bedrooms" placeholder="Bedrooms" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="text" name="location" placeholder="Location" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="text" name="street" placeholder="Street" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="number" name="covered_square_meters" placeholder="Covered m²" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="number" name="total_square_meters" placeholder="Total m²" id="" />
              <input className="p-2 rounded-xl bg-black mx-2" type="text" name="details" placeholder="Details" id="" />
            </div>
            <div className="grid grid-cols-2 justify-center gap-4 my-2">
              {/* <label htmlFor="photo" className="grid grid-cols-2 items-center justify-evenly align-middle overflow-hidden text-center gap-3 rounded-xl m-2 bg-black cursor-pointer">
                <h4 className="text-base font-semibold p-2 bg-zinc-900">Upload a Photo</h4>
                <span className="text-sm ">Max 1</span>
                <input id="photo" type="file" accept="png, jpg" hidden/>
              </label> */}
              <input type="url" name="url" placeholder="Photo" id="" className="p-2 m-2 rounded-xl bg-black"/>
              <button className="m-2 p-2 rounded-xl bg-black mx-2" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-black w-full flex justify-center">
        <ul className="grid w-2/3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
          {
            properties.map((property, index) => (
              <div key={index} className="border rounded-xl max-w-96 hover:scale-105 transition-transform duration-200 border-zinc-900 overflow-hidden">
                <Link href={`/properties/${property.id}`}>
                  <div className="w-full overflow-hidden h-44 bg-zinc-900  justify-end text-center">
                    <div className="flex justify-end align-middle">
                      {
                        property.url ? <Image src={property.url} alt={property.title} width={200} height={200} className="object-cover align-middle w-full" ></Image> : null
                      }
                      <p className="text-sm m-1 absolute font-bold bg-amber-700 p-2 rounded-lg">{property.state}</p>  
                    </div>
                  </div>
                  <div className="p-4 flex justify-between">
                    <div className="grid grid-cols-1 gap-1 w-3/4 justify-end">
                      <h2 className="text-xl font-semibold">{property.title}</h2>
                      {
                        property.description.split('.').map((sentence, index) => (
                          <p key={index} className="text-zinc-400 text-sm">{sentence}</p>
                        ))
                      }
                    </div>
                    <div className="grid grid-cols-1 gap-1 justify-end">
                      <div className="flex justify-end">
                        <p className="text-green-400 text-sm font-bold max-h-7 bg-green-900 p-1 rounded-lg">${property.price}</p>
                      </div>
                    </div>
                </div>
                </Link>
                <form action={deleteRS}>
                  <input type="hidden" name="id" value={property.id} />
                  <button type="submit" className="rounded-lg bg-red-700 p-1 w-full bg-opacity-50 hover:bg-red-500">Delete</button>
                </form>
              </div>
            ))
          }
        </ul>
      </div>

    </main>
  );
}