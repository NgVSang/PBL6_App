import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {colors, sizes} from '../../../constants';
import {SocialProps} from './Social.types';

const Social: FC<SocialProps> = ({iconTheme = colors.WHITE}) => {
  const socialButton = useMemo(() => {
    return [
      {
        icon: require('../../../assets/icons/instagram_icon.png'),
        onPress: () => {},
      },
      {
        icon: require('../../../assets/icons/facebook_icon.png'),
        onPress: () => {},
      },
      {
        icon: require('../../../assets/icons/youtube_icon.png'),
        onPress: () => {},
      },
    ];
  }, []);

  return (
    <View style={styles.socialWrapper}>
      {socialButton.map((button, index) => (
        <TouchableOpacity key={index} onPress={button.onPress}>
          <Image
            source={button.icon}
            style={{
              width: sizes.IconWidth,
              height: sizes.IconHeight,
              tintColor: iconTheme,
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  socialWrapper: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
});
