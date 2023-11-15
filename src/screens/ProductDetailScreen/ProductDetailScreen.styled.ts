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
  pageIndicatorStyle: {
    width: 20,
    height: 20,
    backgroundColor: colors.WHITE,
  },
  activePageIndicatorStyle: {
    backgroundColor: colors.BLUE,
    width: 20,
    height: 20,
  },
  contentWrapper: {
    flexDirection: 'column',
    rowGap: 16,
    paddingVertical: 32,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 1,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  reviewText: {
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
  },
  titleText: {
    color: colors.BLACK,
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 44,
    letterSpacing: -0.4,
  },
  descriptionText: {
    color: colors.GRAY,
    fontSize: 16,
    lineHeight: 26,
  },
  priceText: {
    color: colors.BLACK,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '500',
    letterSpacing: -0.6,
  },
  informationWrapper: {
    paddingVertical: 24,
    flexDirection: 'column',
    rowGap: 24,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 1,
  },
  inforTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inforTitleIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  inforTitleText: {
    color: colors.BLACK,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
  },
  inforRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inforContentTitle: {
    color: colors.BLACK,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  inforContentText: {
    color: colors.BLUE,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  reviewWrapper: {
    paddingVertical: 24,
    flexDirection: 'column',
    rowGap: 24,
  },
  evaluateTitle: {
    color: colors.BLACK,
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '500',
  },
  searchInput: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    flex: 1,
  },
  footerWrapper: {
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    paddingVertical: 20,
    flexDirection: 'column',
    rowGap: 20,
    backgroundColor: colors.WHITE,
  },
});
