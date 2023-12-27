import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  container: {
    paddingHorizontal: sizes.ScreenPaddingHorizontal,
    backgroundColor: colors.WHITE,
  },
  title: {
    color: colors.BLACK,
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '600',
  },
  inforWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_BLUE,
    marginTop: 20,
    borderRadius: 8,
  },
  avatarWrapper: {
    backgroundColor: colors.GRAY,
    borderRadius: 100,
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  cameraWrapper: {
    padding: 7,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 0,
    right: 5,
    borderRadius: 20,
    backgroundColor: colors.BLACK,
    borderWidth: 1,
    borderColor: colors.WHITE,
  },
  cameraIcon: {
    width: 16,
    height: 16,
  },
  inputWrapper: {
    flexDirection: 'column',
    marginVertical: 20,
    gap: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
});
