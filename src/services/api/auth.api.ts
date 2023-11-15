import instance from './axios';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  PROFILE: '/user/me',
  REGISTER: '/auth/register',
};

const login = (data: {username: string; password: string}) => {
  return instance.post(ENDPOINTS.LOGIN, {
    username: data.username,
    password: data.password,
  });
};

const getProfile = () => {
  return instance.get(ENDPOINTS.PROFILE);
};

const register = (data: {
  username: string;
  password: string;
  email: string;
}) => {
  return instance.post(ENDPOINTS.REGISTER, data);
};

export const AuthApi = {
  login,
  getProfile,
  register,
};
