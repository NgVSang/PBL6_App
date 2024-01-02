import {IProduct} from './product.types';

export type StatusOrder =
  | 'ACCEPTED'
  | 'PAYMENT_SUCCESS'
  | 'PENDING'
  | 'REJECTED'
  | 'CANCEL'
  | 'FINISHED'
  | 'SHIPPING'
  | 'WAITING'
  | 'PAYMENT_FAIL'
  | 'SHIPPING_SUCCESS'
  | 'SHIPPING_FAIL'
  | 'SHIPPING_CANCEL'
  | 'SHIPPING_RETURN'
  | 'OUT_OF_STOCK';

export interface IOrder {
  _id: string;
  IDProduct: IProduct[];
  IDCustomer: string;
  orderDate: string;
  statusOrder: StatusOrder;
  ShipAddress: string;
  ShipPhone: string;
  description: string;
  total?: number;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: 0;
  feedbackSupplier: string;
}
