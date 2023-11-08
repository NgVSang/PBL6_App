import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {RegisterScreenProps} from './RegisterScreen.types';
import {styles} from './RegisterScreen.styled';
import {colors} from '../../constants';
import {useFormik} from 'formik';
import {Button} from '../../components';
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
    validationSchema: RegisterSchema,
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
        <View>
          <TextInput
            value={formik.values.email}
            placeholder="Email"
            placeholderTextColor={colors.SEMI_GRAY}
            style={styles.inputStyled}
            onBlur={formik.handleBlur('email')}
            onChangeText={text => formik.setFieldValue('email', text)}
          />
          {formik.errors.email && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>{formik.errors.email}</Text>
            </View>
          )}
        </View>
        <View>
          <TextInput
            value={formik.values.username}
            placeholder="Tài khoản"
            placeholderTextColor={colors.SEMI_GRAY}
            style={styles.inputStyled}
            onBlur={formik.handleBlur('username')}
            onChangeText={text => formik.setFieldValue('username', text)}
          />
          {formik.errors.username && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>{formik.errors.username}</Text>
            </View>
          )}
        </View>
        <View>
          <TextInput
            value={formik.values.password}
            placeholder="Mật khẩu"
            placeholderTextColor={colors.SEMI_GRAY}
            style={styles.inputStyled}
            secureTextEntry
            onBlur={formik.handleBlur('password')}
            onChangeText={text => formik.setFieldValue('password', text)}
          />
          {formik.errors.password && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>{formik.errors.password}</Text>
            </View>
          )}
        </View>
        <View>
          <TextInput
            value={formik.values.re_password}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor={colors.SEMI_GRAY}
            style={styles.inputStyled}
            secureTextEntry
            onBlur={formik.handleBlur('re_password')}
            onChangeText={text => formik.setFieldValue('re_password', text)}
          />
          {formik.errors.re_password && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>
                {formik.errors.re_password}
              </Text>
            </View>
          )}
        </View>
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
