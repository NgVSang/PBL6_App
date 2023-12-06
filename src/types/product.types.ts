import {ICategory} from './categories.types';

export interface IProduct {
  _id: string;
  IDSupplier?: ISupplier;
  IDCategory?: ICategory[];
  type: string;
  pictureLinks: string[];
  nameProduct: string;
  price: number;
  description?: string;
  quantity: number;
  brand?: string;
  rating?: number;
  color: string[];
  size: string[];
  deleted?: boolean;
  createdAt: string;
  updatedAt: string;
  count?: number;
}

export interface ISupplier {
  _id: string;
  companyName: string;
  description: string;
  address: string;
}

export interface IReview {
  IDcustomer: string;
  rating: number;
  comment?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface IVoucher {
  _id: string;
  name: string;
  discont: string;
}
