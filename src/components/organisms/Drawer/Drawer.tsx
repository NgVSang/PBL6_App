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

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Text style={styles.brand}>{commons.brand}</Text>
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
