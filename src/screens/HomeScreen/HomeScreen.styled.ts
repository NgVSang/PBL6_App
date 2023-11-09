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
  categoryIconWrapper: {
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    marginBottom: 5,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
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
    marginBottom: 20,
  },
  genderConainter: {
    width: '47%',
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
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
  photoWrapper: {
    marginBottom: 20,
  },
  sellerPhoto: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    height: 150,
  },
  sellerText: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  productTitle: {
    color: colors.BLACK,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
    textAlign: 'center',
  },
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
    marginTop: 20,
  },
});
