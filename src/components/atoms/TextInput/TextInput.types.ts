import {TextInputProps as RnTextInputProps, ViewStyle} from 'react-native';

export interface TextInputProps extends RnTextInputProps {
  formik?: any;
  fieldValue?: string;
  label?: string;
  containerStyle?: ViewStyle;
}
