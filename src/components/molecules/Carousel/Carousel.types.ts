import {CarouselProps as RnCarouselProps} from 'react-native-banner-carousel/out/Carousel';

export interface CarouselProps extends RnCarouselProps {
  contents: {
    image: any;
    onPress?: () => void;
    width?: number;
  }[];
}
