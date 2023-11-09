import {Image, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from 'react';
import {StarRatingProps} from './StarRating.types';
import {styles} from './StarRating.styled';
import {colors} from '../../../constants';

const StarRating: FC<StarRatingProps> = ({
  rating = 0,
  starSize = 16,
  starColor = colors.BLACK,
  disableStarColor = colors.WHITE,
  style,
  selectedStar,
}) => {
  const [star, setStar] = useState(rating);

  const onClickStarHandler = useCallback(
    (value: number) => {
      if (selectedStar) {
        selectedStar(value);
        setStar(value);
      }
    },
    [selectedStar],
  );

  const renderStar = useMemo(() => {
    const arr = [1, 2, 3, 4, 5];

    return arr.map(value => (
      <TouchableOpacity
        key={value}
        activeOpacity={1}
        onPress={onClickStarHandler.bind(null, value)}
        testID="star-button">
        <Image
          source={require('../../../assets/icons/star_icon.png')}
          style={{
            width: starSize,
            height: starSize,
            resizeMode: 'contain',
            tintColor: value <= star ? starColor : disableStarColor,
          }}
          testID="star"
        />
      </TouchableOpacity>
    ));
  }, [onClickStarHandler, star]);

  return <View style={[styles.container, style]}>{renderStar}</View>;
};

export default StarRating;
