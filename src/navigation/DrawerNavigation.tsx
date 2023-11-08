import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens';
import {Header} from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigation: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
