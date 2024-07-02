
import {Navbar} from "@/components/Navbar";
import { createClient } from '@/utils/supabase/server';

async function getProperties(): Promise<any> {
  let { data: properties, error } = await supabase
    .from('properties')
    .select('*');
  let data = properties;
  return data;
}


export default function Home() {


  
  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar></Navbar>


      <div className="h-96 w-full p-4 bg-gray-700 flex flex-col align-bottom justify-end">
        <h1 className="text-4xl font-bold">Welcome to </h1>
        <h1 className="text-blue-500 font-bold text-6xl">StateVision</h1>
        <p className="mt-4">Browse through our exclusive property listings.</p>
      </div>

      <input
        type="text"
        placeholder="Search for properties..."
        className="mt-4 p-2 border rounded"
      />


      
    </div>

  );
}
