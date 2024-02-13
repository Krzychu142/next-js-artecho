import { ImageType } from "./ImageType";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  EAN: string;
  price: number;
  promotionalPrice: number | null;
  currency: string;
  addedAt: Date;
  quantity: number;
  isAvilable: boolean;
  slug: string;
  images: ImageType[]; 
};