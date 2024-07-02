import {supabase} from '@/utils/supabaseClient';
import {Navbar} from "@/components/Navbar";

// export async function getServerSideProps() {
//   const { data: properties, error } = await supabase
//     .from('properties')
//     .select('*');

//   if (error) {
//     console.error(error);
//     return { props: { properties: [] } };
//   }

//   return { props: { properties } };
// }

export default function Properties({ properties }: { properties: any[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
        
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold">Property Listings</h1>
        <p>Here you can find a list of properties available for sale.</p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {properties.map(property => (
          <div key={property.id} className="border p-4 rounded">
            <h2 className="text-2xl">{property.title}</h2>
            <p>{property.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
