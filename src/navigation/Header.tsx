import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {colors} from '../constants';

interface Props extends NativeStackHeaderProps {
  title?: string;
}

const Header: FC<Props> = ({title, route, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/icons/back_btn_icon.png')}
          style={styles.backBtn}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title ? title : route.name}</Text>
      <View
        style={{
          width: 30,
          height: 30,
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  backBtn: {
    width: 30,
    height: 30,
    tintColor: colors.BLACK,
  },
  title: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
});
