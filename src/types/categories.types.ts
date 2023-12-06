import {IProduct} from './product.types';

export interface ICategory {
  _id: string;
  IDProduct?: IProduct[];
  CategoryName?: string;
  Description?: string;
  slug?: string;
  deleted?: boolean;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}
