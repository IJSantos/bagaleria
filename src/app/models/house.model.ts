export interface House {
  id: number;
  title: string;
  city: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  pdfUrl: string;
  amenities: string[];
}