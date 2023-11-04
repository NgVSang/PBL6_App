import * as Yup from 'yup';

const username = Yup.string().required('Vui lòng nhập tài khoản');

const email = Yup.string()
  .required('Vui lòng nhập Email')
  .email('Vui lòng nhập một email');

const password = Yup.string()
  .required('Vui lòng nhập mật khẩu')
  .min(8, 'Mật khẩu có ít nhất 6 kí tự');

export {email, password, username};
