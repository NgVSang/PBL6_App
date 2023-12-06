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
    paddingVertical: 20,
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
    flexDirection: 'column',
    gap: 20,
  },
  couponTitle: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
  },
  couponDescription: {
    color: colors.GRAY,
    fontSize: 14,
    marginTop: 5,
    fontWeight: '400',
    lineHeight: 22,
  },
  couponCodeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: colors.GRAY,
    borderRadius: 2,
    borderWidth: 1,
    gap: 8,
  },
  couponCodeIcon: {
    width: 24,
    height: 24,
  },
  couponCodeText: {
    flex: 1,
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: -0.4,
    padding: 0,
  },
  couponCodeBtn: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  cartSummaryWrapper: {
    padding: 16,
    borderColor: colors.GRAY,
    borderRadius: 2,
    borderWidth: 1,
    gap: 16,
  },
  cartSummaryTitle: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
