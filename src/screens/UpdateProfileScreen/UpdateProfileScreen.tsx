import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {UpdateProfileScreenProps} from './UpdateProfileScreen.types';
import {styles} from './UpdateProfileScreen.styled';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, setUser} from '../../redux/reducers';
import {useFormik} from 'formik';
import {UpdateProfileSchema} from '../../services/validators';
import {AddressInput, Button, Footer, TextInput} from '../../components';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {AuthApi, CloudyApi} from '../../services/api';
import Toast from 'react-native-toast-message';

const UpdateProfileScreen: FC<UpdateProfileScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<Asset>();
  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        let photoUrl = '';
        if (avatar) {
          const photo = await CloudyApi.addNewImage(avatar);
          photoUrl = photo.data.secure_url;
        } else {
          photoUrl = data.profilePicture;
        }
        await AuthApi.updateProfile(user?._id || '', {
          firstName: data?.firstName || '',
          lastName: data?.lastName || '',
          gender: data?.gender || true,
          phone: data.phone?.toString() || '',
          Address: data?.Address || '',
          profilePicture: photoUrl,
        });
        if (user)
          dispatch(
            setUser({
              ...user,
              firstName: data?.firstName || user.firstName,
              lastName: data?.lastName || user.lastName,
              gender: data?.gender || user.gender,
              phone: data.phone?.toString() || user.phone,
              Address: data?.Address || user.Address,
              profilePicture: photoUrl || user.profilePicture,
            }),
          );
        Toast.show({
          type: 'success',
          text1: 'Cập nhập thành công',
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [avatar],
  );

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      gender: user?.gender || true,
      phone: user?.phone?.toString() || '',
      Address: user?.Address,
      profilePicture: user?.profilePicture,
    },
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: UpdateProfileSchema,
  });

  const handleAddImage = useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    if (result.assets && result.assets.length > 0) {
      console.log(result.assets[0]);
      formik.setFieldValue('profilePicture', result.assets[0].uri);
      setAvatar(result.assets[0]);
      // try {
      //   const res = await CloudyApi.addNewImage(result.assets[0]);
      //   console.log(res.data.secure_url);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }, [formik]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inforWrapper}>
            <View style={styles.avatarWrapper}>
              <Image
                source={
                  formik.values.profilePicture
                    ? {uri: formik.values.profilePicture}
                    : require('../../assets/images/avatar.png')
                }
                style={styles.avatar}
              />
              <TouchableOpacity onPress={handleAddImage}>
                <View style={styles.cameraWrapper}>
                  <Image
                    source={require('../../assets/icons/camera_icon.png')}
                    style={styles.cameraIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Thông tin tài khoản</Text>
            <TextInput
              label="Họ"
              formik={formik}
              fieldValue="firstName"
              style={styles.inputStyle}
            />
            <TextInput
              label="Tên"
              formik={formik}
              fieldValue="lastName"
              style={styles.inputStyle}
            />
            <TextInput
              label="Số điện thoại"
              formik={formik}
              fieldValue="phone"
              keyboardType="numeric"
              style={styles.inputStyle}
            />
            <AddressInput
              label="Địa chỉ"
              formik={formik}
              fieldValue="Address"
              style={styles.inputStyle}
            />
            <Button
              text="Cập nhập thông tin"
              isLoading={isLoading}
              disabled={isLoading}
              onPress={() => {
                formik.handleSubmit();
              }}
            />
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default UpdateProfileScreen;
