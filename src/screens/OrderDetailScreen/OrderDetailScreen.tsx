import {Image, ScrollView, Text, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {OrderDetailScreenProps} from './OrderDetailScreen.types';
import {styles} from './OrderDetailScreen.styled';
import {CartItem, Footer} from '../../components';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers';
import dayjs from 'dayjs';
import {convertPrice} from '../../utils/string';

const OrderDetailScreen: FC<OrderDetailScreenProps> = ({navigation, route}) => {
  const {data} = route.params;
  const {user} = useSelector(authSelector);

  const renderStatus = useMemo(() => {
    let title = '';
    let content = '';
    switch (data.statusOrder) {
      case 'PENDING':
        title = 'Đơn hàng vừa được tạo';
        content =
          'Vui lòng đợi người bán xác nhận trước khi tiến hành thanh toán';
        break;
      case 'ACCEPTED':
        title = 'Đơn hàng đã được xác nhận';
        content = 'Vui lòng thanh toán đơn hàng';
        break;
      case 'PAYMENT_SUCCESS':
        title = 'Đơn hàng đã được thanh toán';
        content = 'Đơn hàng sẽ sớm được giao đến bạn';
        break;
      default:
        break;
    }
    return (
      <View style={styles.statusWrapper}>
        <View style={styles.statusContentWrapper}>
          <Text style={styles.statusTitle}>{title}</Text>
          <Text style={styles.statusContent}>{content}</Text>
        </View>
        <Image
          source={require('../../assets/icons/order_icon.png')}
          style={styles.statusIcon}
        />
      </View>
    );
  }, [data.statusOrder]);

  return (
    <ScrollView style={styles.screen}>
      {renderStatus}
      <View style={styles.container}>
        <View style={styles.locationWrapper}>
          <Image
            source={require('../../assets/icons/location_icon.png')}
            style={styles.locationIcon}
          />
          <View style={styles.locationContentWrapper}>
            <Text style={styles.locationText}>Địa chỉ nhận hàng</Text>
            <Text style={styles.locationContent}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text style={styles.locationContent}>{data.ShipPhone}</Text>
            <Text style={styles.locationContent}>{data.ShipAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.information}>
          <View style={styles.inforWrapper}>
            <Text style={styles.inforTitle}>Mã đơn hàng</Text>
            <Text style={styles.inforContent}>{data._id.slice(-4)}</Text>
          </View>
          <View style={styles.inforWrapper}>
            <Text style={styles.inforTitle}>Thời gian đặt hàng</Text>
            <Text style={styles.inforContent}>
              {dayjs(data.orderDate).format('DD-MM-YYYY  hh:mm')}
            </Text>
          </View>
          {data.feedbackSupplier && (
            <View style={styles.inforWrapper}>
              <Text style={styles.inforTitle}>Phản hồi từ người bán</Text>
              <Text style={styles.inforContent}>{data.feedbackSupplier}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.productWrapper}>
          <Text style={styles.productTitle}>Sản phẩm</Text>
          {data.IDProduct.map(product => (
            <CartItem
              data={product}
              key={product._id}
              style={{borderBottomWidth: 0}}
            />
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.totalWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.totalTitle}>Thành tiền</Text>
            <Text style={styles.totalContent}>
              {convertPrice(data.total)} đ
            </Text>
          </View>
          {data.statusOrder === 'ACCEPTED' && (
            <Text style={[styles.totalContent, {textAlign: 'left'}]}>
              Vui lòng thanh toán số tiền {convertPrice(data.total)} đ
            </Text>
          )}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default OrderDetailScreen;
