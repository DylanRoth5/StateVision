import Nav from "@/components/Nav";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function NewsPage({params}: {params: {id: string}}) {
  const prisma = new PrismaClient();
  const news = await prisma.news.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="px-4 py-10 text-center">
        <div className="flex justify-center items-center">
          <div className="max-w-md">
            {news ? (
              <>
                <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
                <div className="text-lg leading-relaxed mb-6 hover:scale-105 transition duration-200">
                  {
                    news.url ? <a href={news.url} className="text-lg leading-relaxed rounded-full px-4 my-10 mb-6 bg-amber-500">{news.url.slice(0, 20)}</a> : 'URL no encontrada'
                  }
                </div>
                <p className="text-lg leading-relaxed mb-6">{news.description}</p>
                <p className="text-gray-500">{news.updatedAt.toISOString()}</p>
              </>
            ) : (
              <p className="text-lg leading-relaxed mb-6">News not found</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
