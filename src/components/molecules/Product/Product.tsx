import {Image, Text, TouchableOpacity} from 'react-native';
import React, {FC, useCallback} from 'react';
import {ProductProps} from './Product.types';
import {styles} from './Product.styled';
import {Button} from '../../atoms';
import {StarRating} from '../StarRating';
import {convertPrice} from '../../../utils/string';

const Product: FC<ProductProps> = ({
  data,
  handleAddCart,
  handlePress,
  style,
}) => {
  const handlePressProduct = useCallback(() => {
    if (handlePress) {
      handlePress(data);
    }
  }, [handlePress, data]);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePressProduct}>
      <Image source={{uri: data.pictureLinks[0]}} style={styles.photo} />
      {data.rating && <StarRating rating={data.rating} style={styles.rating} />}
      <Text numberOfLines={3} style={styles.name}>
        {data.nameProduct}
      </Text>
      <Text style={styles.price}>{convertPrice(data.price)} đ</Text>
    </TouchableOpacity>
  );
};

export default Product;
