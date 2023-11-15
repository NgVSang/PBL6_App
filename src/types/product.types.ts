export interface IProduct {
  _id: string;
  IDSupplier: ISupplier;
  IDCategory: ICategory[];
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
}

export interface ISupplier {
  _id: string;
  companyName: string;
  description: string;
  address: string;
}

export interface ICategory {
  _id: string;
  CategoryName: string;
}

export interface IReview {
  IDcustomer: string;
  rating: number;
  comment?: string;
  createdAt: string;
  updatedAt?: string;
}
