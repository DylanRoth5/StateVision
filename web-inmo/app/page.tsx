import Header from "@/components/Header";
import { PrismaClient } from '@prisma/client'
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import Galery from "@/components/galery";
import About from "@/components/about";
import prisma from '@/lib/prisma'
import { real_states, news } from '@prisma/client'

export default async function Index() {
  const properties = await prisma.real_states.findMany({
    take: 6,
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
      <Nav/>

      <Header headerData={properties as real_states[]} />

      <Separator className="max-w-4xl" />

      <Galery
        itemsArray={news as news[]}
        title="Avisos y Noticias"
        type="news"
        notice />

      <Separator className="max-w-4xl" />

      <Galery
        itemsArray={properties as real_states[]}
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
        showMap
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
