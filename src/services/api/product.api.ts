import {ICategory, IProduct} from '../../types';
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

const getCategories = () => {
  return instance.get(ENDPOINTS.CATEGORY);
};

const getProductsByCategory = (categoryId: string) => {
  return instance.get<ICategory>(`${ENDPOINTS.CATEGORY}/${categoryId}`);
};

export const ProductApi = {
  getListProduct,
  getReviewProduct,
  getCategories,
  getProductsByCategory,
};
