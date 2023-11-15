import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {RegisterScreenProps} from './RegisterScreen.types';
import {styles} from './RegisterScreen.styled';
import {colors} from '../../constants';
import {useFormik} from 'formik';
import {Button, TextInput} from '../../components';
import {RegisterSchema} from '../../services/validators';
import Toast from 'react-native-toast-message';
import {AuthApi} from '../../services/api';

const RegisterScreen: FC<RegisterScreenProps> = ({navigation, route}) => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        console.log(data);
        if (!checked) {
          Toast.show({
            type: 'error',
            text1: 'Bạn phải đồng ý với các điều khoản và điều kiện',
            text2: 'Vui lòng đồng ý',
          });
        } else {
          const res = await AuthApi.register({
            username: data.username,
            email: data.email,
            password: data.password,
          });
          Toast.show({
            type: 'success',
            text1: 'Tạo tài khoản thành công',
          });
          navigation.pop();
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Tạo tài khoản thất bại',
          text2: 'Vui lòng thử lại',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [checked],
  );

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      re_password: '',
    },
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: RegisterSchema,
  });

  return (
    <ScrollView style={styles.screen}>
      <StatusBar backgroundColor={colors.BLACK} />
      <View style={styles.bannerWrapper}>
        <Image
          source={require('../../assets/icons/logo_square.png')}
          style={styles.banner}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Đăng ký</Text>
          <View style={styles.instructWrapper}>
            <Text style={styles.instructText}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Text
                style={[
                  styles.instructText,
                  {
                    fontWeight: '600',
                    color: colors.GREEN,
                  },
                ]}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput placeholder="Email" formik={formik} fieldValue="email" />
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
        <TextInput
          placeholder="Nhập lại mật khẩu"
          formik={formik}
          fieldValue="re_password"
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
            <Text style={styles.remember}>
              Tôi đồng ý với các điều khoản và điều kiện
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
          </TouchableOpacity> */}
        </View>
        <Button
          onPress={() => {
            formik.handleSubmit();
          }}
          isLoading={isLoading}
          text="Đăng ký"
          style={{marginTop: 12}}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
