import instance from './axios';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  PROFILE: '/user/me',
  REGISTER: '/auth/register',
  FORGOT: '/auth/forgot-password',
  RESET: '/auth/reset-password/',
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

const updateProfile = (
  id: string,
  data: {
    firstName?: string;
    lastName?: string;
    gender?: boolean;
    phone?: string;
    dayOfBirth?: string;
    Address?: string;
    profilePicture?: string;
  },
) => {
  return instance.put(`/user/${id}`, data);
};

const forgotPassword = (email: string) => {
  return instance.post(ENDPOINTS.FORGOT, {email});
};

const newPassword = (data: {tokenResetPassword: string; password: string}) => {
  return instance.post(ENDPOINTS.RESET, data);
};

export const AuthApi = {
  login,
  getProfile,
  register,
  updateProfile,
  forgotPassword,
  newPassword,
};
