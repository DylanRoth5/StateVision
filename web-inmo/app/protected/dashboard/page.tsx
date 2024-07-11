import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import deleteRS from "../actions/deleteRS";
import addRS from "../actions/addRS";
import updateRS from "../actions/updateRS";
import addNews from "../actions/addNews";
import deleteNews from "../actions/deleteNews";
import updateNews from "../actions/updateNews";


import { PrismaClient } from '@prisma/client'
import { Card } from "@/components/ui/card";
import { title } from "process";
import Galery from "@/components/galery";
import TableContent from "@/components/table";
const prisma = new PrismaClient()


interface NewsData {
  id: number;
  title: string;
  description: string;
  image_url: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

interface RealStateData {
  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  bathrooms: number;
  bedrooms: number;
  covered_square_meters: number;
  total_square_meters: number;
  details: string;
  location: string;
  street: string;
  state: string;
  url: string;
  image_url: string;
}


export default async function DashboardPage() {

  const properties = await prisma.real_states.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  const stats = [
    { id: 100, title: 'Total News', description: 'This is a description', image_url: null, url: '' },
    { id: 100, title: 'Total Properties', description: 'This is a description', image_url: null, url: '' },
    { id: 100, title: 'Total Sales', description: 'This is a description', image_url: null, url: '' },
    { id: 100, title: 'Total Visits', description: 'This is a description', image_url: null, url: ''},
  ]

  return (
    <div className="px-4 grid grid-cols-1 self-center justify-center gap-10 ">
      <Nav />

      <Galery
        title="Stats"
        itemsArray={stats}
      />

      <TableContent
        title="News"
        caption="All News"
        itemsArray={news as NewsData[]}
        actions={{ add: addNews, upd: updateNews, del: deleteNews }}
      />

      <TableContent
        title="Properties"
        caption="All Properties"
        itemsArray={properties as RealStateData[]}
        actions={{ add: addRS, upd: updateRS, del: deleteRS }}
      />

      <Footer />
    </div>
  )
}
