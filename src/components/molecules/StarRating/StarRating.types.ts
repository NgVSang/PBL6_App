import {ViewStyle} from 'react-native';

export interface StarRatingProps {
  /**
   * Rating (default 0)
   */
  rating?: number;
  /**
   * If null, the star cannot have effect of touchable opacity
   */
  selectedStar?: (rate: number) => void;

  /**
   * Star size (default 16)
   */
  starSize?: number;

  /**
   * Star color (default black)
   */
  starColor?: string;

  disableStarColor?: string;

  style?: ViewStyle;
}
