import {ScrollView, Text, View} from 'react-native';
import React, {FC, useCallback, useMemo} from 'react';
import {CartScreenProps} from './CartScreen.types';
import {styles} from './CartScreen.styled';
import {CartItem, Footer, StepBar} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {cartSelector, deleteCartItem, updateCart} from '../../redux/reducers';
import {IProduct} from '../../types';

const CartScreen: FC<CartScreenProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {items} = useSelector(cartSelector);

  const handleRemove = useCallback(
    (data: IProduct) => {
      dispatch(deleteCartItem(data._id));
    },
    [items, dispatch],
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
    [items],
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
  }, [items, handleRemove]);

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
      <View style={styles.container}>
        <View style={styles.couponWrapper}></View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default CartScreen;
