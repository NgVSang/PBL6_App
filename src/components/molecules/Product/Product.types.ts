import {ViewStyle} from 'react-native';
import {IProduct} from '../../../types';

export interface ProductProps {
  data: IProduct;
  handlePress?: (product: IProduct) => void;
  handleAddCart?: (product: IProduct) => void;
  style?: ViewStyle;
}
