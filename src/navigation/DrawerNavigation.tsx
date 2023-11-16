import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CartScreen, HomeScreen, ProductDetailScreen} from '../screens';
import {Header, Drawer as RnDrawer} from '../components';
import {DrawerParamList} from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <RnDrawer {...props} />}
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
