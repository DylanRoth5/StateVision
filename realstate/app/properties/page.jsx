import { PrismaClient } from "@prisma/client";
import Navbar from "./../../components/NavBar";
import Filter from "./../../components/Filter";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function Properties() {
  const navLinks = [
    { url: '/', text: 'Home' },
    { url: '#properties', text: 'Properties' },
    { url: '/#about', text: 'About' },
    { url: '/dashboard', text: 'Dashboard' },
  ];

  const properties = await prisma.realEstate.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <main>
      <Navbar links={navLinks} />
      <Filter/>
      <div id="properties" className="bg-black p-4 mx-auto w-full sm:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4">
        {
            properties.map((property, index) => (
              <Link href={`/properties/${property.id}`} key={index} className="border rounded-xl max-w-96 hover:scale-105 transition-transform duration-200 border-zinc-900 overflow-hidden">
                <div className="w-full overflow-hidden h-44 bg-zinc-900  justify-end text-center">
                  <div className="flex justify-end">
                    {
                      property.url ? <Image src={property.url} alt={property.title} width={200} height={200} className="object-cover w-full" ></Image> : null
                    }
                    <p className="text-sm m-1 absolute font-bold bg-amber-800 bg-opacity-80 p-2 rounded-lg">{property.state}</p>  
                  </div>
                </div>
                <div className="p-4 flex justify-between">
                  <div className="grid grid-cols-1 gap-1  justify-end">
                    <h2 className="text-xl font-semibold">{property.title}</h2>
                      {
                        property.description.split('.').map((sentence, index) => (
                          <p key={index} className="text-zinc-400 text-sm">{sentence}</p>
                        ))
                      }
                  </div>
                  <div className="grid grid-cols-1 gap-1 justify-end">
                    <div className="flex justify-end">
                      {
                        property.price >0 ? <p className="text-green-400 text-sm font-bold max-h-7 bg-green-900 p-1 rounded-lg">${property.price}</p> : null
                      }
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

      <footer class="w-full bg-black p-2 lg:p-4 border-t-2 border-gray-900">
        <div className="flex justify-center w-full  py-8">
          <div id="contact" className="max-w-4xl w-full p-8 bg-zinc-900 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <form className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">Name:</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border bg-zinc-900 border-zinc-800 rounded-md focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">Email:</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border-2 bg-zinc-900 border-zinc-800 rounded-md focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-semibold">Message:</label>
                    <textarea id="message" name="message" className="mt-1 p-2 w-full border bg-zinc-900 border-zinc-800 rounded-md focus:ring-orange-500 focus:border-orange-500" rows="4"></textarea>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition duration-200">Send</button>
                </form>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <h1 className="text-3xl font-bold mb-4">Donde Encontrarnos</h1>
                <p className="text-lg mb-2">1100 Gualeguaychú, Macia, Entre Rios</p>
                <div className="mt-4">
                  <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
                  <p className="flex items-center mb-2 text-zinc-300">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    lorenahinmobiliaria@gmail.com</p>
                  <p className="flex items-center mb-2 text-zinc-300">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#fff" />
                    </svg>
                    (3445) 471-387</p>
                  <a href="https://www.facebook.com/lorenahuckinmobiliaria" className="flex items-center mb-2  text-zinc-300 hover:text-zinc-500" target="_blank" rel="noopener noreferrer">
                    <svg fill="#fff" width="24px" height="24px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path>
                    </svg>
                    LorenaHuckInmobiliaria
                  </a>
                  <a href="https://www.instagram.com/lorenahuckinmo/" className="flex items-center mb-2 text-zinc-300 hover:text-zinc-500" target="_blank" rel="noopener noreferrer">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#fff" />
                    </svg>
                    LorenaHuckInmo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center pb-2">Copyright &copy; 2024 Real State</p>
      </footer>

    </main>
  );
}