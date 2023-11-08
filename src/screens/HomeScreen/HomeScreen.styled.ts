import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    backgroundColor: colors.WHITE,
  },
  categoryWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    paddingVertical: 30,
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 0.5,
  },
  category: {
    width: '33.33333%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: colors.GRAY,
    marginBottom: 5,
  },
  categoryTitle: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
  },
  bannerWrapper: {
    marginVertical: 20,
  },
  genderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderConainter: {
    width: '47%',
  },
  genderText: {
    color: colors.WHITE,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  genderPhoto: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    height: 300,
  },
});
