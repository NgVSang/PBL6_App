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

const RegisterScreen: FC<RegisterScreenProps> = ({navigation, route}) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = useCallback((data: any) => {
    try {
      console.log(data);
    } catch (error) {}
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      password: '',
      email: '',
      rePassword: '',
    },
    onSubmit: handleSubmit,
    // validationSchema: LoginSchema,
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
            value={formik.values.name}
            placeholder="Họ và tên"
            placeholderTextColor={colors.SEMI_GRAY}
            style={styles.inputStyled}
            onBlur={formik.handleBlur('name')}
            onChangeText={text => formik.setFieldValue('name', text)}
          />
          {formik.errors.name && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>{formik.errors.name}</Text>
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
            value={formik.values.rePassword}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor={colors.SEMI_GRAY}
            style={styles.inputStyled}
            secureTextEntry
            onBlur={formik.handleBlur('rePassword')}
            onChangeText={text => formik.setFieldValue('rePassword', text)}
          />
          {formik.errors.rePassword && (
            <View style={styles.error_message}>
              <Text style={{color: colors.RED}}>
                {formik.errors.rePassword}
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
          text="Đăng ký"
          style={{marginTop: 12}}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
