import axios, {AxiosError, AxiosResponse} from 'axios';
import {BASE_URL} from '../../config';
import {store} from '../../redux/store';
import {logout} from '../../redux/reducers';
import {NavigationService} from '../navigation';
import {Alert} from 'react-native';

const baseURL = `${BASE_URL}/api`;

const instance = axios.create({
  baseURL: baseURL,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
  withCredentials: true,
});

const handleSuccessResponse = async <T>(response: AxiosResponse<T>) => {
  return response;
};
const handleErrorResponse = async (error: any) => {
  try {
    if (error.response.data.error === 'jwt expired') {
      Alert.alert(
        'Hết phiên đăng nhập',
        'Bạn đã hết phiên đăng nhập, vui lòng đăng nhập lại để tiếp tục.',
      );
      setHeaderConfigAxios();
      store.dispatch(logout());
      NavigationService.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
          },
        ],
      });
    }

    return Promise.reject(error.response.data);
  } catch (e: any) {
    return Promise.reject({message: 'Network Error'});
  }
};

export const setHeaderConfigAxios = (token?: string) => {
  if (token) {
    instance.defaults.headers.common.Authorization = token
      ? 'Bearer ' + token
      : '';
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

instance.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export default instance;
