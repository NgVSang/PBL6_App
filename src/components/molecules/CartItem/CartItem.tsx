import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {CartItemProps} from './CartItem.types';
import {styles} from './CartItem.styled';
import {Quantity} from '../Quantity';
import {convertPrice} from '../../../utils/string';
import {NavigationService} from '../../../services';

const CartItem: FC<CartItemProps> = ({
  data,
  handleDelete,
  style,
  handleChangeQuantity,
}) => {
  const onPressDelete = useCallback(() => {
    if (handleDelete) handleDelete(data);
  }, [data, handleDelete]);

  const onChangeQuantity = useCallback(
    (count: number) => {
      if (handleChangeQuantity) {
        handleChangeQuantity(data, count);
      }
    },
    [handleChangeQuantity],
  );

  return (
    <View style={[styles.container, style]}>
      <Image source={{uri: data.pictureLinks[0]}} style={styles.photo} />
      <View style={styles.contentWrapper}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              NavigationService.push('Drawer', {
                screen: 'ProductDetail',
                params: {
                  data: data,
                },
              });
            }}>
            <Text style={styles.productName}>{data.nameProduct}</Text>
          </TouchableOpacity>
          <Text style={styles.inforStyle}>Màu: {data.color[0]}</Text>
          <Text style={styles.inforStyle}>Kích cỡ: {data.size[0]}</Text>
          {handleChangeQuantity && (
            <Quantity
              count={data.count || 1}
              handleChangeValue={onChangeQuantity}
              maximum={data.quantity}
              style={styles.quantityStyle}
            />
          )}
        </View>
        {handleDelete && (
          <View style={styles.rightWrapper}>
            <Text style={styles.price}>
              {convertPrice(data.price * (data.count || 1))} đ
            </Text>

            <TouchableOpacity
              style={styles.deleteBtnWrapper}
              onPress={onPressDelete}>
              <Image
                source={require('../../../assets/icons/close_icon.png')}
                style={styles.deleteBtn}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default CartItem;
