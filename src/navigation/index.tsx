import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {NavigationService} from '../services';
import {HomeScreen, LoginScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC = () => {
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);
  NavigationService.initialize(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'simple_push',
        }}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
