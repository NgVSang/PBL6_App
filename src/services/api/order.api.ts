import {IOrder, IProduct} from '../../types';
import instance from './axios';

const ENDPOINTS = {
  ORDER: '/order',
  CATEGORY: '/category',
  PAYMENT: '/payment/pay',
};

const getListOrder = () => {
  return instance.get(ENDPOINTS.ORDER);
};

const createOrder = (data: {
  IDProducts: string[];
  total: number;
  ShipAddress: string;
  ShipPhone: string;
  description?: string;
}) => {
  return instance.post(ENDPOINTS.ORDER, data);
};

const getOrderByID = (id: string) => {
  return instance.get(`${ENDPOINTS.ORDER}/${id}`);
};

const createPayment = (order: IOrder) => {
  return instance.post(`${ENDPOINTS.ORDER}/${order._id}`, {
    name: order._id,
    price: order.total || 0,
    currency: 'USD',
  });
};

export const OrderApi = {
  getListOrder,
  createOrder,
  getOrderByID,
  createPayment,
};
