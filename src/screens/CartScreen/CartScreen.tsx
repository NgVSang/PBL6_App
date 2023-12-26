import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from 'react';
import {CartScreenProps} from './CartScreen.types';
import {styles} from './CartScreen.styled';
import {Button, CartItem, Footer, StepBar, Voucher} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector, deleteCartItem, updateCart} from '../../redux/reducers';
import {IProduct, IVoucher} from '../../types';
import {colors} from '../../constants';
import {convertPrice} from '../../utils/string';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartScreen: FC<CartScreenProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {items} = useSelector(cartSelector);
  const [voucher, setVoucher] = useState<IVoucher>();

  const handleRemove = useCallback(
    (data: IProduct) => {
      dispatch(deleteCartItem(data._id));
    },
    [dispatch],
  );

  const handleChange = useCallback(
    (item: IProduct, count: number) => {
      const newCartItems = items.map(obj => {
        if (obj._id === item._id) {
          return {...obj, count: count};
        } else {
          return obj;
        }
      });
      dispatch(updateCart(newCartItems));
    },
    [dispatch, items],
  );

  const renderProducts = useMemo(() => {
    if (items.length === 0) {
      return (
        <Text style={styles.warningText}>
          Bạn chưa thêm sản phẩm nào vào giỏ hàng
        </Text>
      );
    } else {
      return items.map(item => (
        <CartItem
          data={item}
          key={item._id}
          handleDelete={handleRemove}
          handleChangeQuantity={handleChange}
        />
      ));
    }
  }, [items, handleRemove, handleChange]);

  const subTotal = useMemo(() => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * (items[i].count || 0);
    }
    return total;
  }, [items]);

  const total = useMemo(() => {
    let finalTotal = subTotal;
    if (voucher?._id === '2') {
      if (finalTotal * voucher.discount! < voucher.maxDiscound!) {
        finalTotal -= finalTotal * voucher.discount!;
      } else {
        finalTotal -= voucher.maxDiscound!;
      }
    }
    return finalTotal;
  }, [subTotal, voucher]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Giỏ hàng</Text>
        </View>
        <View style={styles.stepBarWrapper}>
          <StepBar step={1} title="Đặt hàng" />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.productsWrapper}>
          <Text style={styles.productsTitle}>Sản phẩm</Text>
          <View style={styles.productWrapper}>{renderProducts}</View>
        </View>
      </View>
      {items.length > 0 && (
        <View style={styles.container}>
          <View style={styles.couponWrapper}>
            <View>
              <Text style={styles.couponTitle}>Bạn có mã giảm giá không?</Text>
              <Text style={styles.couponDescription}>
                Thêm mã của bạn để được giảm giá ngay lập tức
              </Text>
            </View>
            <View style={styles.couponCodeWrapper}>
              <Image
                source={require('../../assets/icons/ticket_percent.png')}
                style={styles.couponCodeIcon}
              />
              <TextInput
                style={styles.couponCodeText}
                placeholder="Mã giảm giá"
                placeholderTextColor={colors.GRAY}
              />
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.couponCodeBtn}>Áp dụng</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cartSummaryWrapper}>
              <Text style={styles.cartSummaryTitle}>WatchWorld Voucer</Text>
              <Voucher
                data={[
                  {
                    _id: '1',
                    typeDiscount: 'Miễn phí vận chuyển',
                  },
                  {
                    _id: '2',
                    typeDiscount: 'Giảm 10% đơn hàng (tối đa 50k)',
                    discount: 0.1,
                    maxDiscound: 50000,
                  },
                ]}
                onSelect={setVoucher}
              />
              <View>
                <View
                  style={[
                    styles.priceWrapper,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {borderBottomColor: colors.BLACK, borderBottomWidth: 1},
                  ]}>
                  <Text style={styles.cartSummaryTitle}>Sub Total</Text>
                  <Text style={styles.cartSummaryTitle}>
                    {convertPrice(subTotal)}đ
                  </Text>
                </View>
                <View style={styles.priceWrapper}>
                  <Text style={styles.cartSummaryTitle}>Total</Text>
                  <Text style={styles.cartSummaryTitle}>
                    {convertPrice(total)}đ
                  </Text>
                </View>
              </View>
              <Button text="Thanh toán" />
            </View>
          </View>
        </View>
      )}
      <Footer />
    </ScrollView>
  );
};

export default CartScreen;
