import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface HeaderProps {
  headerData: {
    id: number;
    title: string;
    description: string | null;
    // Include other property types as necessary
  }[];
}


export default function Header({ headerData }: HeaderProps) {

  return (
    <div className=" text-white banner flex flex-col align-middle w-6xl self-center">

      <Carousel className="max-w-6xl">
        <CarouselContent className="">
          {headerData.map((data, index) => (
            <CarouselItem key={index} className="">
              <div>
                <Card>
                  <CardContent className="flex  bg-orange-400 aspect-video items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{data.title}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-x-[200%]"/>
        <CarouselNext className="translate-x-[-230%]"/>
      </Carousel>
      <div className="self-start bg-gradient-to-tr from-black from-5% to-transparent to-50% pl-4 pb-4 w-full h-2/3 flex flex-col justify-end translate-y-[-100%]">
        <h1 className="text-4xl mb-2 font-bold">Inmuebles</h1>
        <p className="text-xl italic">"Encuentra el hogar de tus sueños"</p>
      </div>
    </div>
  );
}
