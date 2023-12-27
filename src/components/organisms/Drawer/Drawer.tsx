import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useMemo} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {styles} from './Drawer.styled';
import {colors, commons} from '../../../constants';
import {Button} from '../../atoms';
import {Social} from '../../molecules';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/reducers';
import {setHeaderConfigAxios} from '../../../services/api/axios';
import {NavigationService} from '../../../services';

const Drawer: FC<DrawerContentComponentProps> = ({navigation, state}) => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    try {
      setHeaderConfigAxios();
      dispatch(logout());
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
          },
        ],
      });
    } catch (error) {}
  }, [navigation]);

  const buttons = useMemo(() => {
    return [
      {
        name: 'Trang chủ',
        onPress: () => {
          // navigation.navigate('Home');
          NavigationService.push('Drawer', {
            screen: 'Home',
          });
        },
      },
      {
        name: 'Tài khoản',
        onPress: () => {
          // navigation.navigate('Profile');
          NavigationService.push('Drawer', {
            screen: 'Profile',
          });
        },
      },
    ];
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Image
          source={require('../../../assets/images/title_image.png')}
          style={{width: 150, height: 25, resizeMode: 'contain'}}
        />
        <View style={styles.searchWrapper}>
          <Image
            source={require('../../../assets/icons/search_icon.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.GRAY}
            style={styles.searchInput}
          />
        </View>
        <View style={styles.navigateWrapper}>
          {buttons.map(button => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.navigateButton}
              key={button.name}
              onPress={button.onPress}>
              <Text style={styles.buttonText}>{button.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <View style={{marginVertical: 20}}>
          <Button text="Đăng xuất" onPress={handleLogout} />
        </View>
        <Social iconTheme={colors.BLACK} />
      </View>
    </View>
  );
};

export default Drawer;
