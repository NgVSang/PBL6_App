import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {OrderProps} from './Order.types';
import {styles} from './Order.styled';
import dayjs from 'dayjs';
dayjs.locale('vn');

const Order: FC<OrderProps> = ({data, style}) => {
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
        <Text style={styles.valueText}></Text>
      </View>
    </View>
  );
};

export default Order;
