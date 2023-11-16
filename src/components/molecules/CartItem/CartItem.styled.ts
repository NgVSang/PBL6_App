import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.BLACK,
    alignItems: 'center',
  },
  photo: {
    width: 80,
    height: 100,
    resizeMode: 'cover',
    marginRight: 15,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
  },
  leftWrapper: {
    width: '60%',
    flexDirection: 'column',
    gap: 8,
  },
  productName: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
  },
  inforStyle: {
    color: colors.GRAY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  quantityStyle: {
    backgroundColor: colors.WHITE,
    borderColor: colors.BLACK,
    borderWidth: 0.5,
  },
  rightWrapper: {
    width: '35%',
    alignItems: 'flex-end',
    gap: 20,
  },
  price: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
  },
  deleteBtnWrapper: {
    padding: 3,
  },
  deleteBtn: {
    width: 24,
    height: 24,
  },
});
