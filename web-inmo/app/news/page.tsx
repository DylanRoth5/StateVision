import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import Link from 'next/link';
const prisma = new PrismaClient()

export default async function realEstate() {
  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })


  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <Nav></Nav>

      <div className="flex-1 flex flex-col gap-10 mb-10 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">Noticias y avisos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((news, index) => (
            <Link href={`/news/${news.id}`} key={index}>
              <Card key={index} className="cursor-pointer hover:scale-105 transition duration-200">
                <CardHeader className="text-xl font-bold">
                  {news.title}
                </CardHeader>
                <CardContent className="text-gray-400">{`${news.description?.slice(0, 100)}...`}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
