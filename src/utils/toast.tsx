import React from 'react';
import {ErrorToast, ToastConfig} from 'react-native-toast-message';
import {colors} from '../constants';
import {StyleSheet} from 'react-native';

export const toastConfig: ToastConfig = {
  error: props => (
    <ErrorToast
      {...props}
      style={[
        props.position === 'top'
          ? {borderLeftColor: colors.RED}
          : styles.leftBorder,
      ]}
      text1Style={styles.text1Style}
      text1NumberOfLines={2}
      text2Style={styles.text2Style}
    />
  ),
};

const styles = StyleSheet.create({
  leftBorder: {
    borderLeftColor: colors.WHITE,
  },
  text1Style: {
    fontSize: 12,
    // fontFamily: fonts.GothamHTFBook,
    fontWeight: '400',
    lineHeight: 20,
  },
  text2Style: {
    fontSize: 12,
    // fontFamily: fonts.GothamHTFBook,
    fontWeight: '400',
  },
});
