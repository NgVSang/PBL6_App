import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {AddressInputProps} from './AddressInput.types';
import {styles} from './AddressInput.styled';
import {TextInput} from '../../atoms';

const AddressInput: FC<AddressInputProps> = ({style, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.inputStyle, style]} {...props} />
    </View>
  );
};

export default AddressInput;
