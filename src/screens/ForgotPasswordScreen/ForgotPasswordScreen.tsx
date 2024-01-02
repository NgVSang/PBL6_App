import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import React, {FC, useCallback, useState} from 'react';
import {ForgotPasswordScreenProps} from './ForgotPasswordScreen.types';
import {colors} from '../../constants';
import {styles} from './ForgotPasswordScreen.styled';
import {Button, TextInput} from '../../components';
import {useFormik} from 'formik';
import Toast from 'react-native-toast-message';
import {ForgotPassSchema, email} from '../../services/validators';
import {AuthApi} from '../../services/api';

const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newPass, setNewPass] = useState(false);

  const handleRequestReset = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        await AuthApi.forgotPassword(data.email);
        setNewPass(true);
        Toast.show({
          type: 'info',
          text1: 'Mã đã được gửi đến email của bạn',
        });
      } catch (error: any) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Thất bại',
          text2:
            error?.message ||
            'Email của bạn không có hoặc đang gặp vấn đề trên hệ thống',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [navigation],
  );

  const handleNewPassword = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        await AuthApi.newPassword({
          password: data.password,
          tokenResetPassword: data.tokenResetPassword,
        });
        navigation.pop();
        Toast.show({
          type: 'success',
          text1: 'Mật khẩu đã được đặt lại',
        });
      } catch (error: any) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: 'Đặt lại mật khẩu thất bại',
          text2: error?.message || 'Vui lòng thử lại sau',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [navigation],
  );

  const formikNewPass = useFormik({
    initialValues: {
      tokenResetPassword: '',
      password: '',
      re_password: '',
    },
    onSubmit: handleNewPassword,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: ForgotPassSchema,
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: handleRequestReset,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      email: email,
    }),
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
      {newPass ? (
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Quên mật khẩu</Text>
            <View style={styles.instructWrapper}>
              <Text style={styles.instructText}>
                Nhập mã được gửi về email của bạn
              </Text>
            </View>
          </View>
          <TextInput
            placeholder="Mã xác nhận"
            formik={formikNewPass}
            fieldValue="tokenResetPassword"
          />
          <TextInput
            placeholder="Mật khẩu"
            formik={formikNewPass}
            fieldValue="password"
            secureTextEntry
          />
          <TextInput
            placeholder="Nhập lại mật khẩu"
            formik={formikNewPass}
            fieldValue="re_password"
            secureTextEntry
          />
          <Button
            onPress={() => {
              formikNewPass.handleSubmit();
            }}
            isLoading={isLoading}
            text="Đặt lại mật khẩu"
            style={{marginTop: 32}}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Quên mật khẩu</Text>
            <View style={styles.instructWrapper}>
              <Text style={styles.instructText}>
                Vui lòng nhập email của bạn
              </Text>
            </View>
          </View>
          <TextInput placeholder="Email" formik={formik} fieldValue="email" />
          <Button
            onPress={() => {
              formik.handleSubmit();
            }}
            isLoading={isLoading}
            text="Gửi"
            style={{marginTop: 32}}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
