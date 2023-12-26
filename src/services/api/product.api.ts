import {ICategory, IDiscount, IProduct} from '../../types';
import instance from './axios';

const ENDPOINTS = {
  LISTPRODUCT: '/products',
  CATEGORY: '/category',
};

const getListProduct = () => {
  return instance.get<IProduct[]>(ENDPOINTS.LISTPRODUCT);
};

const getReviewProduct = (id: string) => {
  return instance.get(`${ENDPOINTS.LISTPRODUCT}/${id}/review`);
};

const addReviewProduct = (
  id: string,
  review: {
    rating: number;
    comment: string;
  },
) => {
  return instance.post(`${ENDPOINTS.LISTPRODUCT}/${id}/review`, {...review});
};

const getCategories = () => {
  return instance.get(ENDPOINTS.CATEGORY);
};

const getProductsByCategory = (categoryId: string) => {
  return instance.get<ICategory>(`${ENDPOINTS.CATEGORY}/${categoryId}`);
};

const getProductDiscount = (id: string) => {
  return instance.get<IDiscount[]>(`${ENDPOINTS.LISTPRODUCT}/${id}/discount`);
};

export const ProductApi = {
  getListProduct,
  getReviewProduct,
  getCategories,
  getProductsByCategory,
  addReviewProduct,
  getProductDiscount,
};
