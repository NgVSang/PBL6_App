import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    flexDirection: 'column',
    paddingVertical: 48,
  },
  topBarWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomColor: colors.WHITE,
    borderBottomWidth: 1,
  },
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  brand: {
    color: colors.WHITE,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 24,
  },
  rectangle: {
    width: 24,
    height: 1,
    backgroundColor: colors.WHITE,
    marginVertical: 16,
  },
  decoration: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  navigateWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 32,
    paddingVertical: 40,
  },
  buttonWrapper: {},
  buttonText: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  bottomBarWrapper: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 24,
  },
  socialWrapper: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  socialIcon: {
    width: sizes.IconWidth,
    height: sizes.IconHeight,
    tintColor: colors.WHITE,
  },
  copyrightWrapper: {
    paddingTop: 32,
  },
  copyrightText: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
});
