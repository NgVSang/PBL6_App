import {IProduct} from '../../types';
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

export const ProductApi = {
  getListProduct,
  getReviewProduct,
  getCategories,
};
