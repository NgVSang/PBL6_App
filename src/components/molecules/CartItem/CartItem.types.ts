import {ViewStyle} from 'react-native';
import {IProduct} from '../../../types';

export interface CartItemProps {
  data: IProduct;
  handleDelete?: (item: IProduct) => void;
  style?: ViewStyle;
  handleChangeQuantity?: (item: IProduct, count: number) => void;
}
