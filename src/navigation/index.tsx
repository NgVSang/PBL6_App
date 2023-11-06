import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {NavigationService} from '../services';
import {HomeScreen, LoginScreen, RegisterScreen} from '../screens';
import {colors} from '../constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC = () => {
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);
  NavigationService.initialize(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={colors.WHITE} />
      <Stack.Navigator
        screenOptions={{
          animation: 'simple_push',
          headerShown: false,
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
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
