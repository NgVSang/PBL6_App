import {Text, View, TextInput as RnTextInput} from 'react-native';
import React, {FC} from 'react';
import {TextInputProps} from './TextInput.types';
import {colors} from '../../../constants';
import {styles} from './TextInput.styled';

const TextInput: FC<TextInputProps> = ({
  formik,
  fieldValue,
  containerStyle,
  value,
  placeholderTextColor = colors.SEMI_GRAY,
  style,
  onBlur,
  onChangeText,
  placeholder = 'Nhập',
  ...props
}) => {
  if (formik && fieldValue) {
    return (
      <View style={[styles.container, containerStyle]}>
        <RnTextInput
          value={formik.values[fieldValue]}
          placeholderTextColor={placeholderTextColor}
          style={[styles.inputStyled, style]}
          onBlur={formik.handleBlur(fieldValue)}
          onChangeText={text => formik.setFieldValue(fieldValue, text)}
          placeholder={placeholder}
          {...props}
        />
        {formik.errors[fieldValue] && (
          <View style={styles.error_message}>
            <Text style={{color: colors.RED}}>{formik.errors[fieldValue]}</Text>
          </View>
        )}
      </View>
    );
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <RnTextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.inputStyled, style]}
        onBlur={onBlur}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

export default TextInput;
