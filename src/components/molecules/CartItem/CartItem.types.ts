import {IProduct} from '../../../types';

export interface CartItemProps {
  data: IProduct;
  handleDelete?: (item: IProduct) => void;
  handleChangeQuantity?: (item: IProduct, count: number) => void;
}
