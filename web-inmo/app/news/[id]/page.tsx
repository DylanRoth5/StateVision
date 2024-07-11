import Nav from "@/components/Nav";
import Image from "next/image";
import prisma from '@/lib/prisma'

export default async function NewsPage({params}: {params: {id: string}}) {
  const news = await prisma.news.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  return (
    <div className="min-h-screen">
      <Nav />
      {
        news.image_url ? <Image src={news.image_url} alt={news.title} width={1000} height={1000} className="object-cover w-full max-h-96" /> : null
      }
      
      {
        news.image_url ? <div className="w-full h-20 bg-gradient-to-t from-black to-transparent translate-y-[-100%]">
      </div> : null
      }
      <main className={`px-4 text-center ${ news.image_url? `translate-y-[-50%]` : `py-10` } `}>
        <div className="flex justify-center items-center">
          <div className="max-w-md">
            {news ? (
              <div>
                <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
                <div className="text-lg leading-relaxed mb-6 hover:scale-105 transition duration-200">
                  {
                    news.url ? <a href={news.url} className="text-lg leading-relaxed rounded-full px-4 my-10 mb-6 bg-amber-500">{news.url.slice(0, 20)}</a> : 'URL no encontrada'
                  }
                </div>
                <p className="text-lg leading-relaxed mb-6">{news.description}</p>
                <p className="text-gray-500">{news.updatedAt.toISOString()}</p>
              </div>
            ) : (
              <p className="text-lg leading-relaxed mb-6">News not found</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
