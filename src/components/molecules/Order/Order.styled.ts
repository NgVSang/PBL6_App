import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 15,
    paddingVertical: 15,
    borderBlockColor: colors.GRAY,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  labelText: {
    flex: 1,
    color: colors.GRAY,
    fontSize: 16,
    lineHeight: 22,
  },
  valueText: {
    flex: 1,
    color: colors.BLACK,
    fontSize: 16,
    lineHeight: 22,
  },
  btnWrapper: {
    paddingHorizontal: 40,
    marginTop: 10,
  },
});
