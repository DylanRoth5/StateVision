import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Nav from "@/components/Nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";
import { PrismaClient } from '@prisma/client'
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
const prisma = new PrismaClient()

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const properties = await prisma.real_states.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc'
    }
  })

  const news = await prisma.news.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc'
    }
  })


  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="w-full">
        <div className="py-4 font-bold bg-purple-950 text-center">
          <p className="text-2xl">Welcome back {user.email?.split("@")[0]}!!</p>
        </div>
        <Nav></Nav>
      </div>

      <Header headerData={properties} />

      <div className="flex-1 flex flex-col gap-10 my-10 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">Avisos y Noticias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((news, index) => (
            <Link href={`/news/${news.id}`} key={index}>
              <Card key={index} className="cursor-pointer flex-col hover:scale-105 transition duration-200">
                <div className="flex justify-between">
                  <CardHeader className="text-xl mt-none font-bold">
                    {news.title}
                  </CardHeader>
                  <CardContent className="bg-amber-500 m-4 px-4 h-7 rounded-full bg-opacity-70">Nuevo</CardContent>
                </div>
                <CardContent className="text-gray-400">{`${news.description?.slice(0, 100)}...`}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Separator className="max-w-4xl" />
      <div className="flex-1 flex flex-col gap-10 my-10 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">Propiedades recien agregadas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <Link href={`/realstate/${property.id}`} key={index}>
              <Card key={index} className="cursor-pointer hover:scale-105 transition duration-200">
                <CardHeader className="text-xl font-bold">
                  {property.title}
                </CardHeader>
                <CardContent className="text-gray-400">{`${property.description?.slice(0, 100)}...`}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Separator className="max-w-4xl" />

      <div id="about" className="my-10 w-full md:max-w-4xl">
        <Card>
          <CardHeader className="text-xl text-center font-bold">
            <CardTitle>
              Sobre nosotros
            </CardTitle>
            <p className="text-lg  text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl mb-8 text-center">Conoce al equipo!</h1>
            <div className="sm:flex grid justify-center self-center align-middle ">
              <div className="p-2 border py-8 w-64 m-2 rounded-lg text-center">
                {/* <Image src={lore} alt="Colo" width={500} height={500} class="w-44 h-44 rounded-full mx-auto mb-4" /> */}
                <h3 className="text-lg font-semibold">Lorena Huck</h3>
                <p className="text-sm text-gray-500">Corredora Inmobiliaria</p>
                <p className="text-sm text-gray-500">Abogada</p>
              </div>
              <div className="p-2 border py-8 w-64 m-2 rounded-lg text-center">
                {/* <Image src={colo} alt="Colo" width={500} height={500} class="w-44 h-44 rounded-full mx-auto mb-4" /> */}
                <h3 className="text-lg font-semibold">Augusto Buet</h3>
                <p className="text-sm text-gray-500">Secretario</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="max-w-4xl" />

      <div id="contact" className="my-10 w-full md:max-w-4xl">
        <Card className="border-none">
          <CardHeader className="text-xl text-center font-bold">
            <CardTitle>
              Informacion de contacto
            </CardTitle>
            <p className="text-lg text-gray-600 mb-8">Ponte en contacto con nosotros!</p>
          </CardHeader>
          <CardContent>
            <h1 className="text-2xl mb-8 text-center">Detalles de Contacto</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-2 border py-8 hover:scale-105 transition duration-200 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-gray-500">lorenahuckinmobiliaria@gmail.com</p>
              </div>
              <div className="p-2 border py-8 hover:scale-105 transition duration-200 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm text-gray-500">+1 123-456-7890</p>
              </div>
              
              <div className="p-2 border py-8 hover:scale-105 transition duration-200 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Instagram</h3>
                <a href="https://www.instagram.com/lorenahuckinmo/" className="text-sm text-gray-500">@lorenahuckinmo</a>
              </div>
              
              <div className="p-2 border py-8 hover:scale-105 transition duration-200 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Facebook</h3>
                <a href="https://www.facebook.com/lorenahuckinmobiliaria/" className="text-sm text-gray-500">Lorena Huck inmobiliaria</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
