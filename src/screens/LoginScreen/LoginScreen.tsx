import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {styles} from './LoginScreen.styled';
import {colors} from '../../constants';
import {LoginScreenProps} from './LoginScreen.types';
import {useFormik} from 'formik';
import {LoginSchema} from '../../services/validators';
import {Button, TextInput} from '../../components';
import {AuthApi} from '../../services/api';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setCredential, setUser} from '../../redux/reducers';
import {setHeaderConfigAxios} from '../../services/api/axios';

const LoginScreen: FC<LoginScreenProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (data: any) => {
    try {
      setIsLoading(true);
      const res = await AuthApi.login(data);
      dispatch(
        setCredential({
          token: res.data.token,
        }),
      );
      setHeaderConfigAxios(res.data.token);
      navigation.reset({
        index: 0,
        routes: [{name: 'Drawer'}],
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Thông tin đăng nhập không chính xác',
        text2: 'Vui lòng thử lại',
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: LoginSchema,
  });

  return (
    <ScrollView style={styles.screen}>
      <StatusBar backgroundColor={colors.BLACK} />
      <Image
        source={require('../../assets/images/login_banner.jpg')}
        style={styles.banner}
      />
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Đăng nhập</Text>
          <View style={styles.instructWrapper}>
            <Text style={styles.instructText}>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.push('Register')}>
              <Text
                style={[
                  styles.instructText,
                  {
                    fontWeight: '600',
                    color: colors.GREEN,
                  },
                ]}>
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          placeholder="Tài khoản"
          formik={formik}
          fieldValue="username"
        />
        <TextInput
          placeholder="Mật khẩu"
          formik={formik}
          fieldValue="password"
          secureTextEntry
        />
        <View style={styles.rowWrapper}>
          <TouchableOpacity
            style={styles.checkBoxWrapper}
            onPress={() => {
              setChecked(!checked);
            }}>
            <View style={styles.checkBox}>
              {checked && (
                <Image
                  source={require('../../assets/icons/close_icon.png')}
                  style={{width: 18, height: 18}}
                />
              )}
            </View>
            <Text style={styles.remember}>Ghi nhớ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => {
            formik.handleSubmit();
          }}
          isLoading={isLoading}
          text="Đăng nhập"
          style={{marginTop: 32}}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
