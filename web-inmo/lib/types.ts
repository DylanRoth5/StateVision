
interface NewsData {
  id: string;
  title: string;
  description: string;
  image_url: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

interface RealStateData {
  id: string;
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

export default interface MyInterface { NewsData: any, RealStateData: any }