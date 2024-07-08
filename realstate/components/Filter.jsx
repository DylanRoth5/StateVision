'use client';
import React, { useState } from 'react';
import Image from "next/image";
import logo from "../public/logo.png";

export const Filter = ({ links = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-4">Propiedades</h1>
        <button onClick={toggleFilters} className="flex items-center bg-zinc-900 p-2 rounded-md m-2 hover:bg-zinc-800">
          <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className="ml-2 text-xl font-bold">Filtros</p>
        </button>
        <div className={`transition-all duration-200 ${isOpen ? 'scale-100' : 'scale-[0%] h-0'}`}>
          <form action="action" className="flex">
            <select id="countries" class="bg-zinc-900 text-sm rounded-lg m-2 block w-full hover:bg-zinc-800 p-2">
              <option selected>estado</option>
              <option value="venta">Venta</option>
              <option value="alquiler">Alquiler</option>
              <option value="arrendamiento">Arrendamiento</option>
            </select>
            <select id="countries" class="bg-zinc-900 text-sm rounded-lg m-2 block w-full hover:bg-zinc-800 p-2">
              <option selected>tipo</option>
              <option value="casa">casa</option>
              <option value="campo">campo</option>
              <option value="terreno">terreno</option>
              <option value="galpon">galpon</option>
            </select>

            {/* <div className=" w-full px-2 m-2 bg-zinc-900 rounded-xl">
              <p className="text-sm p-2  text-center w-full text-zinc-500 font-bold">precio</p>
              <div className="flex  m-2">

                <input type="number" name="price-min" placeholder="MiN" className="bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-lg m-2 block w-full hover:bg-zinc-800 p-2" id="" />

                <input type="number" name="price-max" placeholder="MAX" className="bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-lg m-2 block w-full hover:bg-zinc-800 p-2" id="" />

              </div>
            </div> */}

            <div className=" w-full px-2 m-2 bg-zinc-900 rounded-xl">
              <p className="text-sm p-2  text-center w-full text-zinc-500 font-bold">m²</p>
              <div className="flex  m-2">

                <input type="number" name="m-min" placeholder="MiN" className="bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-lg m-2 block w-full hover:bg-zinc-800 p-2" id="" />

                <input type="number" name="m-max" placeholder="MAX" className="bg-zinc-900 text-sm placeholder:text-zinc-500 rounded-lg m-2 block w-full hover:bg-zinc-800 p-2" id="" />

              </div>
            </div>
            <input type="button" value="Buscar" className="p-2 m-2 rounded-xl bg-zinc-900 hover:bg-zinc-800" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;