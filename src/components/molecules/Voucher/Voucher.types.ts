import {ViewStyle} from 'react-native';
import {IVoucher} from '../../../types';

export interface VoucherProps {
  data: IVoucher[];
  onSelect?: (item: IVoucher) => void;
  style?: ViewStyle;
  voucherStyle?: ViewStyle;
}
