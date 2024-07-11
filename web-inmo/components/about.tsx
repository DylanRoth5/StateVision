import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface AboutProps {
  title: string;
  text: string;
  subtitle: string;
  itemsArray: {
    title: string;
    description: string | null;
    link: string | null;
    linkString: string;
  }[];
  showMap?: boolean;
}

export default function About({ title, text, subtitle, itemsArray, showMap }: AboutProps) {
  return (
    <div id="about" className="my-10 w-full md:max-w-4xl">
      <Card>
        <CardHeader className="text-xl text-center font-bold">
          <CardTitle>
            {title}
          </CardTitle>
          <p className="text-lg  text-gray-600 mb-8">{text}</p>
          {
            showMap ?
              <div className="mx-10 my-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251.02098479793028!2d-59.39804280678037!3d-32.16858144152757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b1691ac1169d1f%3A0xbc6c587319f5749f!2sLorena%20Huck%20Inmobiliaria!5e0!3m2!1ses!2sar!4v1720711939356!5m2!1ses!2sar" width="600" height="450" loading="lazy" className="w-full aspect-video rounded-xl"></iframe>
              </div> : null
          }
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl mb-8 text-center">{subtitle}</h1>
          <div className={`grid justify-center grid-cols-1 md:grid-cols-2 self-center align-middle ${itemsArray.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            {
              itemsArray.map((item, index) => (
                <div key={index} className="p-2 border py-8 m-2 rounded-lg text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {
                    item.link ? (
                      <a className="text-sm text-gray-500" href={item.link}>{item.linkString}</a>
                    ) : <p className="text-sm text-gray-500">{item.description}</p>
                  }
                </div>
              ))
            }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}