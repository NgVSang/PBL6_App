/* eslint-disable react-hooks/exhaustive-deps */
import {Alert, BackHandler, StatusBar, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {NavigationService} from '../services';
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OrderDetailScreen,
  RegisterScreen,
} from '../screens';
import {colors} from '../constants';
import DrawerNavigation from './DrawerNavigation';
import {useSelector} from 'react-redux';
import {authSelector} from '../redux/reducers';
import {setHeaderConfigAxios} from '../services/api/axios';
import Header from './Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC = () => {
  const {credential, loggedin} = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(true);

  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);
  NavigationService.initialize(navigationRef);

  useEffect(() => {
    // Set token for axios when access_token change
    if (credential?.token) {
      setHeaderConfigAxios(credential.token);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Custom BackHandler listener
    const handleBackPress = () => {
      if (NavigationService.canGoBack()) {
        NavigationService.pop();
      } else {
        Alert.alert('Thoát', 'Bạn muốn thoát khỏi ứng dụng?', [
          {
            text: 'Huỷ',
            onPress: () => {},
          },
          {
            text: 'Ok',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ]);
      }
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Remove listener
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  if (isLoading) {
    return <View style={{backgroundColor: colors.WHITE}} />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={colors.WHITE} />
      <Stack.Navigator
        screenOptions={{
          animation: 'simple_push',
        }}
        initialRouteName={loggedin ? 'Drawer' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetailScreen}
          options={{
            header: props => <Header title="Chi tiết đơn hàng" {...props} />,
          }}
        />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
