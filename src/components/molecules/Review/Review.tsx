import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ReviewProps} from './Review.types';
import {styles} from './Review.styled';
import {StarRating} from '../StarRating';

const Review: FC<ReviewProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inforWrapper}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.nameStyle}>{data.IDcustomer}</Text>
          <StarRating rating={data.rating} />
        </View>
      </View>
      <Text style={styles.comment}>{data.comment}</Text>
    </View>
  );
};

export default Review;
