import {Alert, Linking, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from 'react';
import {OrderProps} from './Order.types';
import {styles} from './Order.styled';
import dayjs from 'dayjs';
import {convertPrice, getStatusOrder} from '../../../utils/string';
import {Button} from '../../atoms';
import {OrderApi, ProductApi} from '../../../services/api';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import {setPaymentLink} from '../../../redux/reducers';
import {colors} from '../../../constants';
import {NavigationService} from '../../../services';
dayjs.locale('vn');

const Order: FC<OrderProps> = ({data, style}) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = useCallback(async () => {
    try {
      setIsLoading(true);
      const convert = await ProductApi.convertMoney();
      let total = parseFloat(((data.total || 0) / 24380).toFixed(2));
      if (convert.data?.rates) {
        const rates = convert.data.rates;
        total = parseFloat(
          ((data.total || 0) / (rates.VND / rates.USD)).toFixed(2),
        );
      }
      const res = await OrderApi.createPayment({...data, total: total});
      if (res.data.links[1]?.href) {
        console.log(res.data.links[1]?.href);
        // Linking.openURL(res.data.links[1]?.href || '');
      }
      dispatch(setPaymentLink(res.data.links[1]?.href));
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Thanh toán thất bại',
        text2: 'Vui lòng thử lại sau',
      });
    } finally {
      setIsLoading(false);
    }
  }, [data, dispatch]);

  const handleCancel = useCallback(async () => {
    try {
      setIsLoading(true);
      // const res = await OrderApi.createPayment(data);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Hủy đơn hàng thất bại',
        text2: 'Vui lòng thử lại sau',
      });
    } finally {
      setIsLoading(false);
    }
  }, [data]);

  const renderStatus = useMemo(() => {
    switch (data.statusOrder) {
      case 'ACCEPTED':
        return (
          <View style={styles.btnWrapper}>
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              text="Thanh toán"
              onPress={handlePayment}
            />
          </View>
        );
      // case 'FINISHED':
      //   return (
      //     <View style={styles.btnWrapper}>
      //       <Button
      //         isLoading={isLoading}
      //         disabled={isLoading}
      //         text="Đánh giá đơn hàng"
      //         onPress={handleCancel}
      //       />
      //     </View>
      //   );
      default:
        return <></>;
    }
  }, [data.statusOrder, handlePayment, handleCancel, isLoading]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Text style={styles.labelText}>Number ID</Text>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            NavigationService.push<'OrderDetail'>('OrderDetail', {
              data: data,
            });
          }}>
          <Text style={[styles.valueText, {color: colors.BLUE}]}>
            {data._id.slice(-4)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Ngày</Text>
        <Text style={styles.valueText}>
          {dayjs(data.createdAt).format('MMMM DD, YYYY')}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Thạng thái</Text>
        <Text style={styles.valueText}>{getStatusOrder(data.statusOrder)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Tổng giá</Text>
        <Text style={styles.valueText}>{convertPrice(data.total)}đ</Text>
      </View>
      {data.description && (
        <View style={styles.row}>
          <Text style={styles.labelText}>Ghi chú</Text>
          <Text style={styles.valueText}>{data.description}</Text>
        </View>
      )}
      {renderStatus}
    </View>
  );
};

export default Order;
