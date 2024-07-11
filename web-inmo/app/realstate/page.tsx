import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import Galery from '@/components/galery';
import prisma from '@/lib/prisma'

export default async function realEstate() {
  const properties = await prisma.real_states.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <Nav />
      <Galery title="Propiedades" type="realstate" itemsArray={properties} />
      <Footer />
    </div>
  );
}
