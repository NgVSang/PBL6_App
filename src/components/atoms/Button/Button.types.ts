import {ReactNode} from 'react';
import {StyleProp, TouchableOpacityProps, ViewStyle} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  onPressHandler?: () => void;
  isLoading?: boolean;
  isDisable?: boolean;
  children?: ReactNode;
  text?: string;
}
