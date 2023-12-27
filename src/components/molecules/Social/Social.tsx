import {Image, Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {colors, sizes} from '../../../constants';
import {SocialProps} from './Social.types';

const Social: FC<SocialProps> = ({iconTheme = colors.WHITE}) => {
  const socialButton = useMemo(() => {
    return [
      {
        icon: require('../../../assets/icons/instagram_icon.png'),
        onPress: () => {
          Linking.openURL(
            'https://www.instagram.com/sunnywatch2002/?utm_source=ig_web_button_share_sheet&igshid=YzAwZjE1ZTI0Zg==',
          );
        },
      },
      {
        icon: require('../../../assets/icons/facebook_icon.png'),
        onPress: () => {
          Linking.openURL(
            'https://www.facebook.com/profile.php?id=61553800418323&locale=vi_VN',
          );
        },
      },
      {
        icon: require('../../../assets/icons/tik_tok_icon.png'),
        onPress: () => {
          Linking.openURL(
            'https://www.tiktok.com/@sunnywatch2002?_t=8hsVBKYfGD9&_r=1',
          );
        },
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
