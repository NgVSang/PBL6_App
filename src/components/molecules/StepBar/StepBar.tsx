import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {StepBarProps} from './StepBar.types';
import {styles} from './StepBar.styled';
import {colors} from '../../../constants';

const StepBar: FC<StepBarProps> = ({step, title, handlePress, style}) => {
  const onPress = useCallback(() => {
    if (handlePress) handlePress();
  }, [handlePress]);

  return (
    <TouchableOpacity
      activeOpacity={handlePress ? 0.4 : 1}
      onPress={onPress}
      style={[styles.container, style]}>
      <View style={styles.stepWrapper}>
        <Text style={[styles.text, {color: colors.WHITE}]}>{step}</Text>
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default StepBar;
