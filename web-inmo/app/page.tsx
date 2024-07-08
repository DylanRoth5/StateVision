import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
const prisma = new PrismaClient()

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const properties = await prisma.real_states.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc'
    }
  })


  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <Nav></Nav>

      <Header headerData={properties} />

      <div className="flex-1 flex flex-col gap-10 mb-10 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">Propiedades recien agregadas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <Card key={index}>
              <CardHeader className="text-xl font-bold">
                {property.title}
              </CardHeader>
              <CardContent>{property.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Separator className="max-w-4xl" />

      <div id="about" className="my-10">
        <Card>
          <CardHeader className="text-xl text-center font-bold">
            <CardTitle>
              Sobre nosotros
            </CardTitle>
            <p className="text-lg  text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl mb-8 text-center">Conoce al equipo!</h1>
            <div className="lg:flex justify-center">
              <div className="p-2 border py-8 w-64 text-center">
                {/* <Image src={lore} alt="Colo" width={500} height={500} class="w-44 h-44 rounded-full mx-auto mb-4" /> */}
                <h3 className="text-lg font-semibold">Lorena Huck</h3>
                <p className="text-sm text-gray-500">Corredora Inmobiliaria</p>
                <p className="text-sm text-gray-500">Abogada</p>
              </div>
              <div className="p-2 border py-8 w-64 text-center">
                {/* <Image src={colo} alt="Colo" width={500} height={500} class="w-44 h-44 rounded-full mx-auto mb-4" /> */}
                <h3 className="text-lg font-semibold">Augusto Buet</h3>
                <p className="text-sm text-gray-500">Secretario</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
