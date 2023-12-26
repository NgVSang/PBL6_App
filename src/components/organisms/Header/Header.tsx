import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {HeaderProps} from './Header.types';
import {styles} from './Header.styled';
import {commons} from '../../../constants';
import {useSelector} from 'react-redux';
import {cartSelector} from '../../../redux/reducers';

const Header: FC<HeaderProps> = ({navigation}) => {
  const {items} = useSelector(cartSelector);

  const handlePressMenu = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={handlePressMenu}>
          <Image
            source={require('../../../assets/icons/menu_icon.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        {/* <Text style={styles.title}>{commons.brand}</Text> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          activeOpacity={1}>
          <Image
            source={require('../../../assets/images/title_image.png')}
            style={{width: 150, height: 25, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cartWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image
            source={require('../../../assets/icons/cart_icon.png')}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
        <View style={styles.bagdeWrapper}>
          <Text style={styles.bagdeText}>{items.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
