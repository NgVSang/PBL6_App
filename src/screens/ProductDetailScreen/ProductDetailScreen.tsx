/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {ProductDetailScreenProps} from './ProductDetailScreen.types';
import {styles} from './ProductDetailScreen.styled';
import {
  Button,
  Carousel,
  Footer,
  Quantity,
  Review,
  StarRating,
  TextInput,
} from '../../components';
import {colors, sizes} from '../../constants';
import {ProductApi} from '../../services/api';
import {ICategory, IProduct, IReview} from '../../types';
import {convertPrice} from '../../utils/string';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, cartSelector} from '../../redux/reducers';

const ProductDetailScreen: FC<ProductDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const {data} = route.params;
  const {items} = useSelector(cartSelector);
  const dispatch = useDispatch();

  const [reviews, setReviews] = useState<IReview[]>([]);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);

  const images = useMemo(() => {
    const list = [];
    for (let i = 0; i < data.pictureLinks.length; i++) {
      list.push({
        image: {uri: data.pictureLinks[i]},
        height: 300,
      });
    }
    return list;
  }, [data.pictureLinks]);

  const handleGetReview = useCallback(async () => {
    try {
      const res = await ProductApi.getReviewProduct(data._id);
      setReviews(res.data.reviews);
    } catch (error) {
      console.log(error);
    }
  }, [data._id]);

  useEffect(() => {
    handleGetReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = useCallback(() => {
    if (color !== '' && size !== '') {
      const check = items.filter(item => item._id === data._id);
      if (check.length === 0) {
        //
        let newSizeArr = data.size.filter(a => a !== size);
        newSizeArr = [size, ...newSizeArr];
        let newColorArr = data.color.filter(a => a !== color);
        newColorArr = [color, ...newColorArr];
        const product: IProduct = {
          ...data,
          size: newSizeArr,
          color: newColorArr,
          count: count,
        };
        dispatch(addToCart(product));
        navigation.navigate('Cart');
      } else {
        Alert.alert(
          'Thông báo',
          'Bạn đã thêm sản phẩm này vào giỏ rồi, hãy vào giỏ hàng và đặt hàng đi nào!',
        );
      }
    } else {
      Alert.alert('Thiếu thông tin', 'Vui lòng chọn đầy đủ thông tin');
    }
  }, [color, size, items, data, count, dispatch, navigation]);

  const handleSearchCategories = useCallback(
    (category: ICategory) => {
      navigation.navigate('ProductCategory', {
        data: category,
      });
    },
    [navigation],
  );

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <Carousel
            contents={images}
            loop
            index={0}
            autoplay={false}
            pageSize={
              Dimensions.get('window').width - sizes.ScreenPaddingHorizontal * 2
            }
            pageIndicatorStyle={styles.pageIndicatorStyle}
            activePageIndicatorStyle={styles.activePageIndicatorStyle}
            pageIndicatorOffset={30}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.contentWrapper}>
            <View style={styles.ratingWrapper}>
              {data.rating !== null && data.rating !== 0 && (
                <StarRating rating={data.rating} />
              )}
              <Text style={styles.reviewText}>{reviews.length} đánh giá</Text>
            </View>
            <Text style={styles.titleText}>{data.nameProduct}</Text>
            <Text style={styles.descriptionText}>{data.description}</Text>
            <Text style={styles.priceText}>{convertPrice(data.price)} đ</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.informationWrapper}>
            <View style={styles.inforTitleWrapper}>
              <Image
                source={require('../../assets/icons/information_icon.png')}
                style={styles.inforTitleIcon}
              />
              <Text style={styles.inforTitleText}>Thông tin sản phẩm</Text>
            </View>
            <View style={styles.inforRowWrapper}>
              <Text style={styles.inforContentTitle}>Nhà cung cấp:</Text>
              <Text style={styles.inforContentText}>
                {data.IDSupplier?.companyName}
              </Text>
            </View>
            <View style={styles.inforRowWrapper}>
              <Text style={styles.inforContentTitle}>Phân loại:</Text>
              {data.IDCategory?.map(category => (
                <TouchableOpacity
                  onPress={() => {
                    handleSearchCategories(category);
                  }}>
                  <Text style={styles.inforContentText}>
                    {category.CategoryName}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.inforRowWrapper}>
              <Text style={styles.inforContentTitle}>Loại đồng hồ:</Text>
              <Text style={styles.inforContentText}>{data.type}</Text>
            </View>
            <View style={styles.inforRowWrapper}>
              <Text style={styles.inforContentTitle}>Số lượng còn lại:</Text>
              <Text style={styles.inforContentText}>{data.quantity} chiếc</Text>
            </View>
            <View style={styles.inforRowWrapper}>
              <Text style={styles.inforContentTitle}>Màu sắc:</Text>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                {data.color.map(a => (
                  <TouchableOpacity
                    key={a}
                    style={{
                      backgroundColor:
                        color === a ? colors.BLACK : colors.WHITE,
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: colors.BLACK,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                    }}
                    onPress={() => {
                      setColor(a);
                    }}>
                    <Text
                      style={[
                        styles.inforContentText,
                        {
                          color: color === a ? colors.WHITE : colors.BLACK,
                        },
                      ]}>
                      {a}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.inforRowWrapper}>
              <Text style={styles.inforContentTitle}>Kích thước:</Text>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                {data.size.map(a => (
                  <TouchableOpacity
                    key={a}
                    style={{
                      backgroundColor: size === a ? colors.BLACK : colors.WHITE,
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: colors.BLACK,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                    }}
                    onPress={() => {
                      setSize(a);
                    }}>
                    <Text
                      style={[
                        styles.inforContentText,
                        {
                          color: size === a ? colors.WHITE : colors.BLACK,
                        },
                      ]}>
                      {a}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <Quantity
              count={count}
              handleChangeValue={setCount}
              maximum={data.quantity}
            />
            <Button text="Thêm vào giỏ hàng" onPress={handleAddToCart} />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.reviewWrapper}>
            <Text style={styles.evaluateTitle}>Đánh giá</Text>
            <View style={styles.ratingWrapper}>
              {data.rating !== null && data.rating !== 0 && (
                <StarRating rating={data.rating} />
              )}
              <Text style={styles.reviewText}>{reviews.length} đánh giá</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width: '70%', gap: 10}}>
                <TextInput
                  placeholder="Nêu cảm nhận của bạn"
                  placeholderTextColor={colors.GRAY}
                  style={styles.searchInput}
                />
                <StarRating
                  rating={rating}
                  starSize={25}
                  disableStarColor={colors.GRAY}
                  starColor={colors.YELLOW}
                  selectedStar={setRating}
                />
              </View>
              <Button text="Gửi" style={{width: '25%', paddingHorizontal: 5}} />
            </View>
            {reviews.map(a => (
              <Review data={a} key={a.IDcustomer} />
            ))}
          </View>
        </View>
        <Footer />
      </ScrollView>
      {/* <View style={styles.footerWrapper}>
        <Quantity
          count={count}
          handleChangeValue={setCount}
          maximum={data.quantity}
        />
        <Button text="Thêm vào giỏ hàng" />
      </View> */}
    </View>
  );
};

export default ProductDetailScreen;
