import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  container: {
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    backgroundColor: colors.WHITE,
  },
  title: {
    color: colors.BLACK,
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 44,
    letterSpacing: -0.4,
    textAlign: 'center',
    marginVertical: 40,
  },
  inforWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 40,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_BLUE,
    borderRadius: 8,
  },
  avatarWrapper: {
    backgroundColor: colors.GRAY,
    borderRadius: 72,
    width: 72,
    height: 72,
    overflow: 'hidden',
    marginBottom: 10,
  },
  avatar: {
    width: 72,
    height: 72,
    resizeMode: 'cover',
  },
  name: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 32,
    textAlign: 'center',
  },
  orderTitle: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 32,
    marginVertical: 30,
  },
  orderWrapper: {
    marginBottom: 40,
  },
});
