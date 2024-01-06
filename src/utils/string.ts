import {StatusOrder} from '../types';

export const convertPrice = (price?: number) => {
  if (price) {
    const arr = [];
    const priceSTR = price.toString();
    for (let index = priceSTR.length; index > 0; index -= 3) {
      index - 3 > 0
        ? arr.push(priceSTR.slice(index - 3, index))
        : arr.push(priceSTR.slice(0, index));
    }
    arr.reverse();
    return arr.join('.');
  }
  return '0';
};

export const getStatusOrder = (status: StatusOrder) => {
  switch (status) {
    case 'PENDING':
      return 'Chờ xác nhận';
    case 'ACCEPTED':
      return 'Đã xác nhận';
    case 'PAYMENT_SUCCESS':
      return 'Thanh toán thành công';
    case 'WAITING':
      return 'Người bán đang chuẩn bị hàng';
    case 'PAYMENT_FAIL':
      return 'Thanh toán thất bại';
    case 'SHIPPING':
      return 'Đang vận chuyển';
    case 'SHIPPING_SUCCESS':
      return 'Vận chuyển thành công';
    case 'SHIPPING_CANCEL':
      return 'Quá trình chuyển hàng bị hủy';
    case 'REJECTED':
      return 'Bị từ chối';
    case 'FINISHED':
      return 'Hoàn thành';
    case 'OUT_OF_STOCK':
      return 'Kho vừa hết hàng';
    case 'PAYMENT_FAIL':
    case 'CANCEL':
      return 'Bị hủy';
    default:
      return '';
  }
};
