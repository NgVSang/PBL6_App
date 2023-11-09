export interface IProduct {
  id: string;
  images: string[];
  name: string;
  price: number;
  description?: string;
  quantity: number;
  brand?: string;
  rating?: number;
}
