import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
  },
  inforWrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  avatarWrapper: {
    backgroundColor: colors.GRAY,
    borderRadius: 72,
    overflow: 'hidden',
  },
  avatar: {
    width: 72,
    height: 72,
    resizeMode: 'cover',
  },
  contentWrapper: {
    flexDirection: 'column',
    gap: 5,
  },
  nameStyle: {
    marginLeft: 5,
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 32,
  },
  comment: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
  },
});
