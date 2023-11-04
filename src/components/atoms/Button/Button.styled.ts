import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
  },
  gap: {
    width: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.WHITE,
    lineHeight: 28,
    letterSpacing: -0.4,
  },
});
