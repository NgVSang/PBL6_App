import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  stepWrapper: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BLACK,
    borderRadius: 50,
  },
  text: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});
