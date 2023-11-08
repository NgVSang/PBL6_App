import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {HomeScreenProps} from './HomeScreen.types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Footer} from '../../components';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView>
        <Footer />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
