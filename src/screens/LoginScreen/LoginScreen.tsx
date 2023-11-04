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
import {styles} from './LoginScreen.styled';
import {colors} from '../../constants';
import {LoginScreenProps} from './LoginScreen.types';
import {useFormik} from 'formik';
import {LoginSchema} from '../../services/validators';
import {Button} from '../../components';

const LoginScreen: FC<LoginScreenProps> = ({}) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = useCallback((data: any) => {
    try {
    } catch (error) {}
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit,
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
            <TouchableOpacity>
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
            onBlur={formik.handleBlur('password')}
            onChangeText={text => formik.setFieldValue('password', text)}
          />
          {formik.errors.password && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>{formik.errors.password}</Text>
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
            <Text style={styles.remember}>Ghi nhớ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <Button text="Đăng nhập" style={{marginTop: 32}} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
