import {NavigatorScreenParams} from '@react-navigation/native';
import {ICategory, IProduct} from '../types';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ForgotPass: undefined;
  Register: undefined;
  Drawer: NavigatorScreenParams<DrawerParamList> | undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Product: undefined;
  ProductDetail: {
    data: IProduct;
  };
  Cart: undefined;
  ProductCategory: {
    data: ICategory;
  };
  Profile: undefined;
  UpdateProfile: undefined;
};
