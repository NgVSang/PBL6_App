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
  _id: string;
  IDcustomer: {
    _id: string;
    firstName: string;
    lastName: string;
    profilePicture?: string;
  };
  rating?: number;
  comment?: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

export interface IDiscount {
  _id: string;
  IDSupplier?: string;
  IDproduct?: string[];
  name?: string;
  typeDiscount?: string;
  discount?: number;
  startDate?: string;
  endDate?: string;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IVoucher {
  _id: string;
  IDSupplier?: string;
  IDproduct?: string[];
  name?: string;
  typeDiscount?: string;
  discount?: number;
  startDate?: string;
  maxDiscound?: number;
  endDate?: string;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
