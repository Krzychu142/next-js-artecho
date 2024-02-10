import { ImageType } from "./ImageType";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  EAN: string;
  price: number;
  promotionalPrice: number | null;
  addedAt: Date;
  quantity: number;
  isAvilable: boolean;
  images: ImageType[]; 
};