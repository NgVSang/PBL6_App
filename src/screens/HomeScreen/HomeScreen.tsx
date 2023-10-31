import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
