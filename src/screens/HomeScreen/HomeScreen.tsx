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
import {Footer} from '../../components';
import {Carousel} from '../../components/molecules';
import {styles} from './HomeScreen.styled';
import {sizes} from '../../constants';

const HomeScreen: FC<HomeScreenProps> = () => {
  const carouselContents = useMemo(() => {
    return [
      {
        image: {
          uri: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-koi.jpg',
        },
      },
      {
        image: {
          uri: 'https://cdn3.dhht.vn/wp-content/uploads/2023/11/khai-truong-dong-ho-ha-noi-chi-nhanh-2-mb.jpg',
        },
      },
      {
        image: {
          uri: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/banner-trang-chu-dong-ho-hai-trieu-1.jpg',
        },
      },
    ];
  }, []);

  const categories = useMemo(() => {
    return [
      {
        icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-xa-cu.jpg',
        title: 'Mặt xà cừ',
      },
      {
        icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-phien-ban-gioi-han.jpg',
        title: 'Phiên bản giới hạn',
      },
      {
        icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-sieu-mong.jpg',
        title: 'Mặt số siêu mỏng',
      },
      {
        icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-dinh-kim-cuong.jpg',
        title: 'Đính kim cương',
      },
      {
        icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-vang-18k-1.jpg',
        title: 'Vàng 18k',
      },
      {
        icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-skeleton-1.jpg',
        title: 'Đồng hồ cơ',
      },
    ];
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Carousel
            contents={carouselContents}
            autoplay
            loop
            pageSize={
              Dimensions.get('window').width - sizes.ScreenPaddingHorizontal * 2
            }
          />
          <View style={styles.categoryWrapper}>
            {categories.map((categorie, index) => (
              <TouchableOpacity style={styles.category} key={index}>
                <Image
                  source={{uri: categorie.icon}}
                  style={styles.categoryIcon}
                />
                <Text style={styles.categoryTitle}>{categorie.title}</Text>
              </TouchableOpacity>
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
            <View style={{marginVertical: 20}}>
              <TouchableOpacity style={{width: '100%'}}>
                <Image
                  source={require('../../assets/images/couple.webp')}
                  style={styles.genderPhoto}
                />
                <Text style={styles.genderText}>ĐỒNG HỒ ĐÔI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
