import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {FC, useMemo} from 'react';
import {HomeScreenProps} from './HomeScreen.types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Footer, Product} from '../../components';
import {Carousel} from '../../components';
import {styles} from './HomeScreen.styled';
import {sizes} from '../../constants';
import {carouselContents, categories, products} from './HomeScreen.constants';

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          {/* <Carousel
            contents={carouselContents}
            autoplay
            loop
            pageSize={
              Dimensions.get('window').width - sizes.ScreenPaddingHorizontal * 2
            }
          /> */}
          <View style={styles.categoryWrapper}>
            {categories.map((categorie, index) => (
              <View style={styles.category} key={index}>
                <TouchableOpacity style={styles.categoryIconWrapper}>
                  <Image
                    source={{uri: categorie.icon}}
                    style={styles.categoryIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.categoryTitle}>{categorie.title}</Text>
              </View>
            ))}
          </View>
          <View style={styles.bannerWrapper}>
            <View style={styles.genderWrapper}>
              <TouchableOpacity style={styles.genderConainter}>
                <Image
                  source={require('../../assets/images/male.webp')}
                  style={styles.genderPhoto}
                />
                <Text style={styles.genderText}>NAM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.genderConainter}>
                <Image
                  source={require('../../assets/images/female.webp')}
                  style={styles.genderPhoto}
                />
                <Text style={styles.genderText}>NỮ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.photoWrapper}>
              <TouchableOpacity style={{width: '100%'}}>
                <Image
                  source={require('../../assets/images/couple.webp')}
                  style={styles.genderPhoto}
                />
                <Text style={styles.genderText}>ĐỒNG HỒ ĐÔI</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.photoWrapper}>
              <TouchableOpacity style={{width: '100%'}}>
                <Image
                  source={require('../../assets/images/male_best_seller.webp')}
                  style={styles.sellerPhoto}
                />
              </TouchableOpacity>
              <Text style={styles.sellerText}>ĐỒNG HỒ NAM BÁN CHẠY</Text>
            </View>
            <View style={styles.photoWrapper}>
              <TouchableOpacity style={{width: '100%'}}>
                <Image
                  source={require('../../assets/images/female_best_seller.webp')}
                  style={styles.sellerPhoto}
                />
              </TouchableOpacity>
              <Text style={styles.sellerText}>ĐỒNG HỒ NỮ BÁN CHẠY</Text>
            </View>
            <View style={styles.photoWrapper}>
              <TouchableOpacity style={{width: '100%'}}>
                <Image
                  source={require('../../assets/images/new_banner.webp')}
                  style={styles.sellerPhoto}
                />
              </TouchableOpacity>
              <Text style={styles.sellerText}>CÁC MẪU ĐỒNG HỒ MỚI VỀ</Text>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.productTitle}>SẢN PHẨM</Text>
            <View style={styles.productsWrapper}>
              {products.map(product => (
                <Product
                  data={product}
                  key={product.id}
                  style={{width: '45%'}}
                />
              ))}
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
