import {StyleProp, ViewStyle} from 'react-native';
import {IOrder} from '../../../types';

export interface OrderProps {
  data: IOrder;
  style?: StyleProp<ViewStyle>;
}
