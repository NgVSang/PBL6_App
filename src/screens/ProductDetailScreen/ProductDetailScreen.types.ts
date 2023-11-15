import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, DrawerParamList} from '../../navigation/types';

export type ProductDetailScreenProps = NativeStackScreenProps<
  DrawerParamList,
  'ProductDetail'
>;
