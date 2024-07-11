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
    { id: 100, title: 'Total News', description: 'This is a description' },
    { id: 100, title: 'Total Properties', description: 'This is a description' },
    { id: 100, title: 'Total Sales', description: 'This is a description' },
    { id: 100, title: 'Total Visits', description: 'This is a description' },
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
        itemsArray={news}
        actions={{ add: addNews, upd: updateNews, del: deleteNews }}
      />

      <TableContent
        title="Properties"
        caption="All Properties"
        itemsArray={properties}
        actions={{ add: addRS, upd: updateRS, del: deleteRS }}
      />

      <Footer />
    </div>
  )
}
