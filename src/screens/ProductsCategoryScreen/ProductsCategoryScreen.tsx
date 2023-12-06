/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {ProductsCategoryScreenProps} from './ProductsCategoryScreen.types';
import {styles} from './ProductsCategoryScreen.styled';
import {IProduct} from '../../types';
import {ProductApi} from '../../services/api';
import {Product} from '../../components';
import {NavigationService} from '../../services';

const ProductsCategoryScreen: FC<ProductsCategoryScreenProps> = ({
  navigation,
  route,
}) => {
  const {data} = route.params;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleGetData = useCallback(async () => {
    try {
      setIsLoading(true);
      setProducts([]);
      const res = await ProductApi.getProductsByCategory(data._id);
      if (res.data.IDProduct) {
        setProducts(res.data.IDProduct);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [data._id]);

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleGetData} />
        }>
        <View style={styles.container}>
          <View style={styles.productsWrapper}>
            {products.map(product => (
              <Product
                data={product}
                key={product._id}
                style={{width: '45%'}}
                handlePress={productData => {
                  NavigationService.push<'Drawer'>('Drawer', {
                    screen: 'ProductDetail',
                    params: {
                      data: productData,
                    },
                  });
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductsCategoryScreen;
