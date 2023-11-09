import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {FooterProps} from './Footer.types';
import {styles} from './Footer.styled';
import {colors, commons} from '../../../constants';
import {Social} from '../../molecules';

const Footer: FC<FooterProps> = ({theme = colors.BLACK}) => {
  const navigateButton = useMemo(() => {
    return [
      {
        title: 'Home',
        onPress: () => {},
      },
      {
        title: 'Shop',
        onPress: () => {},
      },
      {
        title: 'Product',
        onPress: () => {},
      },
      {
        title: 'Contact Us',
        onPress: () => {},
      },
    ];
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: theme}]}>
      <View style={styles.topBarWrapper}>
        <View style={styles.contentWrapper}>
          {/* <Text style={styles.brand}>{commons.brand}</Text>*/}
          <Image
            source={require('../../../assets/icons/logo_icon.png')}
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
          />
          <View style={styles.rectangle} />
          <Text style={styles.decoration}>Gift & Decoration Store</Text>
        </View>
        <View style={styles.navigateWrapper}>
          {navigateButton.map(button => (
            <TouchableOpacity
              onPress={button.onPress}
              key={button.title}
              style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>{button.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.bottomBarWrapper}>
        <Social />
        <View style={styles.copyrightWrapper}>
          <Text style={styles.copyrightText}>
            Copyright © 2023 HomeDecor. All rights reserved
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
