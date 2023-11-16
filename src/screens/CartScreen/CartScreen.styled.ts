import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  container: {
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
  },
  titleWrapper: {
    marginVertical: 40,
  },
  title: {
    color: colors.BLACK,
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 44,
    letterSpacing: -0.4,
    textAlign: 'center',
  },
  stepBarWrapper: {
    paddingBottom: 20,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 2,
  },
  productsWrapper: {
    paddingVertical: 30,
  },
  productsTitle: {
    color: colors.BLACK,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    paddingBottom: 24,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 1,
  },
  productWrapper: {
    flexDirection: 'column',
    paddingVertical: 20,
    gap: 24,
  },
  warningText: {
    color: colors.YELLOW,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  couponWrapper: {
    marginBottom: 80,
  },
});
