import {Text, View} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from 'react';
import {OrderProps} from './Order.types';
import {styles} from './Order.styled';
import dayjs from 'dayjs';
import {convertPrice} from '../../../utils/string';
import {Button} from '../../atoms';
import {OrderApi} from '../../../services/api';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
dayjs.locale('vn');

const Order: FC<OrderProps> = ({data, style}) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await OrderApi.createPayment(data);
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
  }, [data]);

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
      case 'PENDING':
        return (
          <View style={styles.btnWrapper}>
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              text="Hủy đơn hàng"
              onPress={handleCancel}
            />
          </View>
        );
      default:
        return <></>;
    }
    return <></>;
  }, [data.statusOrder, handlePayment, handleCancel]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <Text style={styles.labelText}>Number ID</Text>
        <Text style={styles.valueText}>{data._id.slice(-4)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Ngày</Text>
        <Text style={styles.valueText}>
          {dayjs(data.createdAt).format('MMMM DD, YYYY')}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labelText}>Thạng thái</Text>
        <Text style={styles.valueText}>{data.statusOrder}</Text>
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
