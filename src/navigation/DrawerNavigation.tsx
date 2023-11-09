import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens';
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
      {/* <Drawer.Screen name="Product" component={() => <View></View>} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
