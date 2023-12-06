import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
  },
  voucher: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.BLACK,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  radioBtn: {
    width: 18,
    height: 18,
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voucherText: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
  },
});
