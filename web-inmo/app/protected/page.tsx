import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import About from "@/components/about";
import Galery from "@/components/galery";
import prisma from '@/lib/prisma'

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

      <Separator className="max-w-4xl" />

      <Galery
        itemsArray={news}
        title="Avisos y Noticias"
        type="news"
        notice />

      <Separator className="max-w-4xl" />

      <Galery
        itemsArray={properties}
        title="Propiedades nuevas"
        type="realstate"
        notice />

      <Separator className="max-w-4xl" />

      <About
        title="Sobre Nosotros"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod!"
        subtitle="Equipo"
        itemsArray={[
          { 
            title: "Lorena Huck", 
            description: "Corredora Inmobiliaria y abogada", 
            link: null, linkString: "" 
          },
          { 
            title: "Augusto Buet", 
            description: "Secretario", 
            link: null, linkString: "" 
          }
        ]}
      />

      <Separator className="max-w-4xl" />

      <About
        title="Informacion de contacto"
        text="Ponte en contacto con nuestro equipo"
        subtitle="Detalles de contacto"
        itemsArray={[
          { 
            title: "Email", 
            description: "lorena.huck@me.com", 
            link: null, linkString: "" 
          },
          { 
            title: "Telefono", 
            description: "+1 123-456-7890", 
            link: null, linkString: "" 
          },
          { 
            title: "Ubicacion", 
            description: "123 Main St, Anytown, USA", 
            link: null, linkString: "" 
          },
          { 
            title: "Horario de atencion", 
            description: "Lunes a Viernes de 9:00 AM a 5:00 PM", 
            link: null, linkString: "" 
          },
          { 
            title: "Facebook", 
            description: null, 
            link: "https://www.facebook.com/lorenahuckinmobiliaria", 
            linkString: " Lorenahuckinmobiliaria" 
          },
          { 
            title: "Instagram", 
            description: null, 
            link: "https://www.instagram.com/lorenahuckinmo/", 
            linkString: "@lorenahuckinmo" 
          }
        ]}
      />

      <Footer />
    </div>
  );
}
