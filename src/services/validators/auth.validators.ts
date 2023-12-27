import * as Yup from 'yup';
import {
  password,
  username,
  email,
  re_password,
  string,
  phone_number,
} from './common';

export const LoginSchema = Yup.object().shape({
  username,
  password,
});

export const RegisterSchema = Yup.object().shape({
  firstName: string,
  lastName: string,
  phone: phone_number,
  username,
  email,
  password,
  re_password,
});

export const UpdateProfileSchema = Yup.object().shape({
  firstName: string,
  lastName: string,
  phone: phone_number,
  Address: string,
});
