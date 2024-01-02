import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bannerWrapper: {
    width: '100%',
    height: 200,
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '80%',
    height: 150,
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: 25,
    flexDirection: 'column',
    rowGap: 32,
    paddingVertical: 40,
  },
  titleWrapper: {},
  titleText: {
    color: colors.BLACK,
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 44,
    letterSpacing: -0.4,
  },
  instructWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  error_message: {
    marginTop: 5,
  },
  instructText: {
    color: colors.GRAY,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
  },
  inputWrapper: {},
  inputStyled: {
    borderBottomColor: colors.SEMI_GRAY,
    borderBottomWidth: 1,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 5,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remember: {
    color: colors.GRAY,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
  },
  forgot: {
    color: colors.BLACK,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
  },
});
