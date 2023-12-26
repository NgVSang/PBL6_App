import {IProduct} from '../../types';
import instance from './axios';

const getListOrder = () => {
  return instance.get('/order');
};

export const OrderApi = {
  getListOrder,
};
