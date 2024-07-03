
import {Navbar} from "@/components/Navbar";
import { createClient } from '@/utils/supabase/server';
import { constants } from "buffer";
import { useState } from "react";



export default  function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />

      <div className="hero-section bg-gray-700 flex flex-col align-bottom justify-end">
        <h1 className="text-4xl font-bold">Welcome to</h1>
        <h1 className="text-blue-500 font-bold text-6xl">StateVision</h1>
        <p className="mt-4">Explore our properties</p>
      </div>

      <input
        type="text"
        placeholder="Search properties..."
        className="mt-4 p-2 border rounded"
      />


    </div>


  );
}
function GetProperties({ properties }: { properties: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {properties.map(property => (
        <div key={property.id} className="border p-4 rounded">
          <h2 className="text-2xl">{property.title}</h2>
          <p>{property.description}</p>
        </div>
      ))}
    </div>
  );
}
