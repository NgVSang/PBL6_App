import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputStyled: {
    borderBottomColor: colors.SEMI_GRAY,
    borderBottomWidth: 1,
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    flex: 1,
  },
  labelText: {
    color: colors.BLACK,
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    fontWeight: '400',
  },
  error_message: {
    marginTop: 5,
  },
});
