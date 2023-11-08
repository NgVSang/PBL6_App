import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  menuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  menuIcon: {
    width: sizes.IconWidth,
    height: sizes.IconHeight,
  },
  title: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  cartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cartIcon: {
    width: sizes.IconWidth,
    height: sizes.IconHeight,
  },
  bagdeWrapper: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    borderRadius: 20,
  },
  bagdeText: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 12,
  },
});
