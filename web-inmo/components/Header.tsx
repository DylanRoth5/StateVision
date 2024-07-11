import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link";

interface HeaderProps {
  headerData: {
    id: number;
    title: string;
    description: string | null;
    image_url: string | null;
    url: string;
  }[];
}


export default function Header({ headerData }: HeaderProps) {
  return (
    <div className=" text-white banner h-96 flex flex-col align-middle w-6xl self-center">
      <Carousel className="max-w-4xl">
        <CarouselContent className="">
          { headerData ? headerData.map((data, index) => (
            <CarouselItem key={index} className="">
              <div>
                <Card>
                  <Link href={`/realstate/${data.id}`}>
                    <CardContent className=" bg-orange-600 aspect-video   items-center justify-center p-1">
                      {
                        data.image_url ?
                        <Image src={data.image_url} alt={data.title} width={500} height={500} className="object-cover w-full aspect-video"/>
                        : <span className="text-4xl font-bold">{data.title}</span>
                      }
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </CarouselItem>
          )): <div className="text-4xl font-bold">Loading...</div>
        }
        </CarouselContent>
        <CarouselPrevious className="scale-150 translate-x-[230%]" />
        <CarouselNext className="scale-150 translate-x-[-230%]" />
      </Carousel>
      <div className="self-start bg-gradient-to-r from-black from-[-10%] to-transparent  pl-4 pb-4 w-1/2 h-2/3 flex flex-col justify-end translate-y-[-100%]">
        <h1 className="text-4xl mb-2 font-bold">Inmuebles</h1>
        <p className="text-xl italic">"Encuentra el hogar de tus sueños"</p>
      </div>
    </div>
  );
}
