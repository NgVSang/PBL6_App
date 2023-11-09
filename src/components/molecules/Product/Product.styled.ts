import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  photoWrapper: {
    padding: 10,
    backgroundColor: colors.LIGHT_GRAY,
  },
  photo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  rating: {
    marginVertical: 10,
  },
  name: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  price: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 10,
  },
});
