import {ViewStyle} from 'react-native';

export interface QuantityProps {
  style?: ViewStyle;
  count: number;
  minimum?: number;
  maximum?: number;
  handleChangeValue?: (count: number) => void;
}
