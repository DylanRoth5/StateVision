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


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function DashboardPage() {

  const properties = await prisma.real_states.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return (
    <div className="max-w-5xl mx-auto grid gap-10 ">
      <Nav></Nav>
      <div className="bg-accent shadow rounded-lg p-8">
        <h3 className="text-lg font-bold mb-4">Welcome to the Dashboard!</h3>
        <p className="text-gray-500">You can view your stats and manage your data here.</p>
        <Link href="/protected/profile" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Go to your profile
        </Link>
      </div>
      <div className="mt-8 bg-accent shadow rounded-lg p-8">
        <h3 className="text-lg font-bold mb-4">Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-900 rounded-md">
            <p className="text-lg font-medium">Total Users</p>
            <p className="mt-2 text-gray-500">1000</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-md">
            <p className="text-lg font-medium">Total Properties</p>
            <p className="mt-2 text-gray-500">1000</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-md">
            <p className="text-lg font-medium">Total Sales</p>
            <p className="mt-2 text-gray-500">1000</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-md">
            <p className="text-lg font-medium">Total Visits</p>
            <p className="mt-2 text-gray-500">1000</p>
          </div>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>details</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.title}</TableCell>
              <TableCell>{property.description}</TableCell>
              <TableCell>{property.details}</TableCell>
              <TableCell className="text-right">{property.price}</TableCell>
              <TableCell className="text-center">
                <form action={deleteRS}>
                  <input type="hidden" name="id" value={property.id} />
                  <button type="submit" className="rounded-lg bg-red-700 p-2 bg-opacity-50 hover:bg-red-500"> X </button>
                </form>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <form action={addRS}>
              <TableCell><input className="bg-inherit p-2 text-white text-md" type="text" name="title" placeholder="Title"/></TableCell>
              <TableCell><input className="bg-inherit p-2 text-white text-md" type="text" name="description" placeholder="Description"/></TableCell>
              <TableCell><input className="bg-inherit p-2 text-white text-md" type="text" name="details" placeholder="Details"/></TableCell>
              <TableCell><input className="bg-inherit p-2 text-white text-md" type="text" name="amount" placeholder="$" /></TableCell>
              <TableCell><button type="submit" className="rounded-lg bg-green-700 p-2 bg-opacity-50 hover:bg-green-500">Add</button></TableCell>
            </form>

          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">{properties.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Footer />
    </div>
  )
}
