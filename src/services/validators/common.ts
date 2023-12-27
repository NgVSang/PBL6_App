import * as Yup from 'yup';

const username = Yup.string().trim().required('Vui lòng nhập tài khoản');

const string = Yup.string()
  .trim()
  .required('Vui lòng điền thông tin còn thiếu');

const phone_number = Yup.string()
  .required('Vui lòng nhập số điện thoại')
  .matches(
    /^(\+84|84|0){1}([3|5|7|8|9]){1}([0-9]{8})$/,
    'Số điện thoại không đúng',
  );

const email = Yup.string()
  .required('Vui lòng nhập Email')
  .email('Vui lòng nhập một email');

const password = Yup.string().required('Vui lòng nhập mật khẩu');

const re_password = Yup.string()
  .required('Vui lòng nhập lại mật khẩu')
  .oneOf([Yup.ref('password')], 'Mật khẩu không khớp');

export {email, password, username, re_password, string, phone_number};
