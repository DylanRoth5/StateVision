import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image"

interface GaleryProps {
  itemsArray: {
    id: number;
    title: string;
    description: string | null;
    image_url: string | null;
    url: string;
  }[];
  title: string;
  notice?: boolean;
  type?: string;
}

export default function Galery({ title, itemsArray, type, notice }: GaleryProps) {

  return (
    <div className="w-full flex flex-col m-2 items-center">
      <div className="flex-1 flex flex-col gap-10 my-10 max-w-4xl px-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {itemsArray.map((item, index) => (
            <Link href={`/${type}/${item.id}`} key={index}>
              <Card key={index} className="cursor-pointer flex-col hover:scale-105 transition duration-200 overflow-hidden">
                {
                  item.image_url ? <Image src={item.image_url} alt={item.title} width={500} height={500} className="object-cover w-full aspect-video" /> : null
                }
                <div className="flex justify-between">
                  <CardHeader className="text-xl mt-none font-bold">
                    {item.title}
                  </CardHeader>
                  {
                    notice ? <CardContent className="bg-amber-500 m-4 px-4 h-7 rounded-full bg-opacity-70">Nuevo</CardContent> : null
                  }
                </div>
                <CardContent className="text-gray-400">{`${item.description?.slice(0, 100)}...`}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}