import axios, {AxiosError, AxiosResponse} from 'axios';
import {BASE_URL} from '../../config';

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
