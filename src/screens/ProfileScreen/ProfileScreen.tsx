import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {ProfileScreenProps} from './ProfileScreen.types';
import {styles} from './ProfileScreen.styled';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers';
import {IOrder} from '../../types';
import {OrderApi} from '../../services/api';
import {Footer, Order} from '../../components';

const ProfileScreen: FC<ProfileScreenProps> = ({navigation}) => {
  const {user} = useSelector(authSelector);

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetListOrder = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await OrderApi.getListOrder();
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetListOrder();
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleGetListOrder}
          />
        }>
        <View style={styles.container}>
          <Text style={styles.title}>Tài khoản</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inforWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={
                    user?.profilePicture
                      ? {uri: user?.profilePicture}
                      : require('../../assets/images/avatar.png')
                  }
                  style={styles.avatar}
                />
              </View>
              <Text
                style={
                  styles.name
                }>{`${user?.firstName} ${user?.lastName}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.orderTitle}>Lịch sử đặt hàng</Text>
          <View style={styles.orderWrapper}>
            {orders.map(order => (
              <Order data={order} key={order._id} />
            ))}
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
