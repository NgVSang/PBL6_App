import * as Yup from 'yup';
import {password, username} from './common';

export const LoginSchema = Yup.object().shape({
  username,
  password,
});
