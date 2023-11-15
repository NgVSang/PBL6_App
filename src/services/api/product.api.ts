import {IProduct} from '../../types';
import instance from './axios';

const ENDPOINTS = {
  LISTPRODUCT: '/products',
};

const getListProduct = () => {
  return instance.get<IProduct[]>(ENDPOINTS.LISTPRODUCT);
};

const getReviewProduct = (id: string) => {
  return instance.get(`${ENDPOINTS.LISTPRODUCT}/${id}/review`);
};

export const ProductApi = {
  getListProduct,
  getReviewProduct,
};
