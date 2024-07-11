import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
  from './ui/table'

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

interface TableData {
  title: string;
  caption: string;
  itemsArray: NewsData[] | RealStateData[];
  actions: { add: (data: FormData) => Promise<void>, upd: (data: FormData) => Promise<void>, del: (data: FormData) => Promise<void> };
}

export default function TableContent({ title, caption, itemsArray, actions }: TableData) {
  return (
    <div className="w-full flex flex-col m-2 items-center">
      <h3 className="text-2xl font-bold mt-8">{title}</h3>
      <div className="lg:max-w-5xl md:max-w-3xl max-w-md mt-4">
        <Table>
          <TableCaption>{caption}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Delete</TableHead>
              {
                Object.keys(itemsArray[0] || {}).map((item) => (
                  <TableHead className="text-center">{item}</TableHead>
                ))
              }
            </TableRow>:
          </TableHeader>
          <TableBody>
            <TableRow>
              <form action={actions.add}>
                <TableCell><button type="submit" className="rounded-lg bg-green-700 p-2 bg-opacity-50 hover:bg-green-500">Add</button></TableCell>
                <TableCell className="bg-inherit p-2 text-white text-center text-md">ID</TableCell>
                {
                  Object.keys(itemsArray[0] || {}).map((item) => (
                    (item != 'id' && item != 'createdAt' && item != 'updatedAt') ?
                      <TableCell><input className="bg-inherit p-2 text-white text-center text-md" type="text" name={item} placeholder={item.toUpperCase()} /></TableCell> : null
                  ))
                }
                <TableCell className='text-center'>Now</TableCell>
                <TableCell className='text-center'>NULL</TableCell>
              </form>
            </TableRow>
            {itemsArray.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-center">
                  <form action={actions.del}>
                    <input type="hidden" name="id" value={item.id} />
                    <button type="submit" className="rounded-lg bg-red-700 p-2 bg-opacity-50 hover:bg-red-500"> X </button>
                  </form>
                </TableCell>
                <TableCell className="text-center">{item.id}</TableCell>
                {
                  Object.keys(itemsArray[0] || {}).map((keys) => (
                    (keys != 'id' && keys != 'createdAt' && keys != 'updatedAt') ?
                      <TableCell className="font-medium text-center">
                        <form action={actions.upd}>
                          <input type="hidden" name="id" value={item.id} />
                          <input className="bg-inherit p-2 text-white text-center text-md" type="text" name={keys} placeholder={item[keys]} defaultValue={item[keys]} />
                          <input type="submit" hidden />
                        </form>
                      </TableCell> : null
                  ))
                }
                <TableHead className="text-center">{`${item.createdAt}`}</TableHead>
                <TableHead className="text-center">{`${item.updatedAt}`}</TableHead>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell className="text-right">{itemsArray.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}