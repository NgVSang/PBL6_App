import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {QuantityProps} from './Quantity.types';
import {styles} from './Quantity.styled';

const Quantity: FC<QuantityProps> = ({
  style,
  count,
  maximum = 100,
  minimum = 0,
  handleChangeValue,
}) => {
  const decreaseValue = useCallback(() => {
    if (handleChangeValue && count > minimum) {
      handleChangeValue(count - 1);
    }
  }, [handleChangeValue, minimum, count]);

  const increaseValue = useCallback(() => {
    if (handleChangeValue && count < maximum) {
      handleChangeValue(count + 1);
    }
  }, [handleChangeValue, maximum, count]);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={decreaseValue} style={styles.buttonWrapper}>
        <Image
          source={require('../../../assets/icons/minus_icon.png')}
          style={styles.button}
        />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={increaseValue} style={styles.buttonWrapper}>
        <Image
          source={require('../../../assets/icons/add_icon.png')}
          style={styles.button}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;
