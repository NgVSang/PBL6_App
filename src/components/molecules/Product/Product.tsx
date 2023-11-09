import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useMemo} from 'react';
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
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image source={{uri: data.images[0]}} style={styles.photo} />
      {data.rating && <StarRating rating={data.rating} style={styles.rating} />}
      <Text numberOfLines={3} style={styles.name}>
        {data.name}
      </Text>
      <Text style={styles.price}>{convertPrice(data.price)} đ</Text>
    </TouchableOpacity>
  );
};

export default Product;
