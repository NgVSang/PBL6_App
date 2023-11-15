import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonWrapper: {
    padding: 4,
  },
  button: {
    width: 16,
    height: 16,
  },
  count: {
    paddingHorizontal: 13,
    fontSize: 14,
    color: colors.BLACK,
    fontWeight: '600',
    lineHeight: 20,
  },
});
