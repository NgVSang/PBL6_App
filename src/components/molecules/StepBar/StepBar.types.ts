import {ViewStyle} from 'react-native';

export interface StepBarProps {
  style?: ViewStyle;
  step: number;
  title: string;
  handlePress?: () => void;
}
