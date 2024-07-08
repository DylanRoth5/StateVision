import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Nav from "@/components/Nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";
import { PrismaClient } from '@prisma/client'
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


  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="w-full">
        <div className="py-4 font-bold bg-purple-950 text-center">
          <p className="text-2xl">Welcome back {user.email?.split("@")[0]}!!</p>
        </div>
        <Nav></Nav>
      </div>

      <Header headerData={properties} />

      <div className="flex-1 flex flex-col mb-10 gap-10 max-w-4xl px-3">
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

      <Footer/>
    </div>
  );
}
