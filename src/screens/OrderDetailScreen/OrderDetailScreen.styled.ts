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
  statusWrapper: {
    backgroundColor: colors.GREEN,
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    paddingVertical: 15,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  statusContentWrapper: {
    flex: 1,
    flexDirection: 'column',
    gap: 5,
  },
  statusTitle: {
    color: colors.WHITE,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '500',
  },
  statusContent: {
    color: colors.WHITE,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  statusIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: colors.WHITE,
  },
  locationWrapper: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: colors.LIGHT_BLUE,
    borderBottomWidth: 5,
    gap: 15,
  },
  locationIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginTop: 6,
  },
  locationContentWrapper: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,
  },
  locationText: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },
  locationContent: {
    color: colors.BLACK,
    fontSize: 16,
    lineHeight: 22,
  },
  information: {
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 10,
    borderBottomColor: colors.LIGHT_BLUE,
    borderBottomWidth: 5,
  },
  inforWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    flex: 1,
  },
  inforTitle: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  inforContent: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    flexShrink: 1,
    textAlign: 'right',
  },
  productWrapper: {
    paddingVertical: 20,
    borderBottomColor: colors.LIGHT_BLUE,
    borderBottomWidth: 5,
    gap: 10,
  },
  productTitle: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
  },
  totalWrapper: {
    borderBottomColor: colors.LIGHT_BLUE,
    borderBottomWidth: 5,
    paddingVertical: 20,
  },
  totalTitle: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  totalContent: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    flexShrink: 1,
    textAlign: 'right',
  },
});