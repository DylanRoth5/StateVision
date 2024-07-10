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

  return (
    <div className="px-4 grid grid-cols-1 self-center justify-center gap-10 ">
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-accent max-w-4xl  shadow rounded-lg p-8">
          <h3 className="text-lg font-bold mb-4">Welcome to the Dashboard!</h3>
          <p className="text-gray-500">You can view your stats and manage your data here.</p>
          <Link href="/protected/profile" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Go to your profile
          </Link>
        </div>
        <div className="mt-8 bg-accent max-w-4xl  shadow rounded-lg p-8">
          <h3 className="text-lg font-bold mb-4">Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-black rounded-md">
              <p className="text-lg font-medium">Total Users</p>
              <p className="mt-2 text-gray-500">1000</p>
            </div>
            <div className="p-4 bg-black rounded-md">
              <p className="text-lg font-medium">Total Properties</p>
              <p className="mt-2 text-gray-500">1000</p>
            </div>
            <div className="p-4 bg-black rounded-md">
              <p className="text-lg font-medium">Total Sales</p>
              <p className="mt-2 text-gray-500">1000</p>
            </div>
            <div className="p-4 bg-black rounded-md">
              <p className="text-lg font-medium">Total Visits</p>
              <p className="mt-2 text-gray-500">1000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col m-2 items-center">
        <h3 className="text-2xl font-bold mt-8">News Table</h3>
        <div className="lg:max-w-5xl md:max-w-3xl max-w-md mt-4">
          <Table >
            <TableCaption>A list of all News.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Delete</TableHead>
                <TableHead className="text-center">Id</TableHead>
                <TableHead className="text-center">Title</TableHead>
                <TableHead className="text-center">Description</TableHead>
                <TableHead className="text-center">Image</TableHead>
                <TableHead className="text-center">Url</TableHead>
                <TableHead className="text-center">CreatedAt</TableHead>
                <TableHead className="text-center">UpdatedAt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <form action={addNews}>
                  <TableCell><button type="submit" className="rounded-lg bg-green-700 p-2 bg-opacity-50 hover:bg-green-500">Add</button></TableCell>
                  <TableCell className="bg-inherit p-2 text-white text-center text-md">{news[0].id + 1}</TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="title" placeholder="Title" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="description" placeholder="Description" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="image" placeholder="Image" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="url" placeholder="Url" /></TableCell>
                  <TableCell>Now</TableCell>
                  <TableCell>NULL</TableCell>
                </form>
              </TableRow>
              {news.map((news) => (
                <TableRow key={news.id}>
                  <TableCell className="text-center">
                    <form action={deleteNews}>
                      <input type="hidden" name="id" value={news.id} />
                      <button type="submit" className="rounded-lg bg-red-700 p-2 bg-opacity-50 hover:bg-red-500"> X </button>
                    </form>
                  </TableCell>
                  <TableCell className="text-center">{news.id}</TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateNews}>
                      <input type="hidden" name="id" value={news.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="title" placeholder={news.title} defaultValue={news.title} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateNews}>
                      <input type="hidden" name="id" value={news.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="description" placeholder={news.description?? ''} defaultValue={news.description?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateNews}>
                      <input type="hidden" name="id" value={news.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="image" placeholder={news.image?? ''} defaultValue={news.image?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateNews}>
                      <input type="hidden" name="id" value={news.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="url" placeholder={news.url?? ''} defaultValue={news.url?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableHead className="text-center">{`${news.createdAt}`}</TableHead>
                  <TableHead className="text-center">{`${news.updatedAt}`}</TableHead>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell className="text-right">{news.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
      <div className="w-full flex flex-col m-2 items-center">
        <h3 className="text-2xl font-bold mt-8">Properties Table</h3>
        <div className="lg:max-w-5xl md:max-w-3xl max-w-md mt-4">
          <Table >
            <TableCaption>A list of all Properties.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Delete</TableHead>
                <TableHead className="text-center">Id</TableHead>
                <TableHead className="text-center">Title</TableHead>
                <TableHead className="text-center">Description</TableHead>
                <TableHead className="text-center">Price</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">State</TableHead>
                <TableHead className="text-center">Covered m²</TableHead>
                <TableHead className="text-center">Total m²</TableHead>
                <TableHead className="text-center">Bathrooms</TableHead>
                <TableHead className="text-center">Bedrooms</TableHead>
                <TableHead className="text-center">Details</TableHead>
                <TableHead className="text-center">Location</TableHead>
                <TableHead className="text-center">Street</TableHead>
                <TableHead className="text-center">Url</TableHead>
                <TableHead className="text-center">CreatedAt</TableHead>
                <TableHead className="text-center">UpdatedAt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <form action={addRS}>
                  <TableCell><button type="submit" className="rounded-lg bg-green-700 p-2 bg-opacity-50 hover:bg-green-500">Add</button></TableCell>
                  <TableCell className="bg-inherit p-2 text-white text-center text-md">{properties[0].id + 1}</TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="title" placeholder="Title" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="description" placeholder="Description" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="number" name="price" placeholder="$$$" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="type" placeholder="Type" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="state" placeholder="State" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="number" name="covered_square_meters" placeholder="Covered m²" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="number" name="total_square_meters" placeholder="Total m²" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="bathrooms" placeholder="Bathrooms" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="bedrooms" placeholder="Bedrooms" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="details" placeholder="Details" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="location" placeholder="Location" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="street" placeholder="Street" /></TableCell>
                  <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name="url" placeholder="Url" /></TableCell>
                  <TableCell>Now</TableCell>
                  <TableCell>NULL</TableCell>
                </form>
              </TableRow>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="text-center">
                    <form action={deleteRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <button type="submit" className="rounded-lg bg-red-700 p-2 bg-opacity-50 hover:bg-red-500"> X </button>
                    </form>
                  </TableCell>
                  <TableCell className="text-center">{property.id}</TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="title" placeholder={property.title} defaultValue={property.title} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="description" placeholder={property.description?? ''} defaultValue={property.description?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="number" name="price" placeholder={`${property.price}`?? '0'} defaultValue={property.price?? 0} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="type" placeholder={property.type?? ''} defaultValue={property.type?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="state" placeholder={property.state?? ''} defaultValue={property.state?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="state" placeholder={property.state?? ''} defaultValue={property.state?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="number" name="covered_square_meters" placeholder={`${property.covered_square_meters}`?? '0'} defaultValue={property.covered_square_meters?? 0} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="number" name="total_square_meters" placeholder={`${property.total_square_meters}`?? '0'} defaultValue={property.total_square_meters?? 0} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="number" name="bathrooms" placeholder={`${property.bathrooms}`?? '0'} defaultValue={property.bathrooms?? 0} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="number" name="bedrooms" placeholder={`${property.bedrooms}`?? '0'} defaultValue={property.bedrooms?? 0} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="details" placeholder={property.details?? ''} defaultValue={property.details?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="location" placeholder={property.location?? ''} defaultValue={property.location?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="street" placeholder={property.street?? ''} defaultValue={property.street?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <form action={updateRS}>
                      <input type="hidden" name="id" value={property.id} />
                      <input className="bg-inherit p-2 text-white text-center text-md" type="text" name="url" placeholder={property.url?? ''} defaultValue={property.url?? ''} />
                      <input type="submit" hidden />
                    </form>
                  </TableCell>
                  <TableHead className="text-center">{`${property.createdAt}`}</TableHead>
                  <TableHead className="text-center">{`${property.updatedAt}`}</TableHead>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell className="text-right">{properties.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>

      <Footer />
    </div>
  )
}
