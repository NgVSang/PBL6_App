import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: colors.WHITE,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topWrapper: {},
  searchWrapper: {
    marginVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.BLACK,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  searchIcon: {
    width: sizes.IconWidth,
    height: sizes.IconHeight,
  },
  searchInput: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    flex: 1,
  },
  brand: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  navigateWrapper: {
    flexDirection: 'column',
    gap: 10,
  },
  navigateButton: {
    paddingBottom: 10,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 0.5,
  },
  buttonText: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  bottomWrapper: {},
});
