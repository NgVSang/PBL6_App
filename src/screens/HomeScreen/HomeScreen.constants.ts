import {ICategory, IProduct} from '../../types';

export const categories = [
  {
    icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-xa-cu.jpg',
    title: 'Mặt xà cừ',
  },
  {
    icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-phien-ban-gioi-han.jpg',
    title: 'Phiên bản giới hạn',
  },
  {
    icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-sieu-mong.jpg',
    title: 'Mặt số siêu mỏng',
  },
  {
    icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-dinh-kim-cuong.jpg',
    title: 'Đính kim cương',
  },
  {
    icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-vang-18k-1.jpg',
    title: 'Vàng 18k',
  },
  {
    icon: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/dong-ho-skeleton-1.jpg',
    title: 'Đồng hồ cơ',
  },
];

export const carouselContents = [
  {
    image: {
      uri: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/banner-danh-muc-dong-ho-koi.jpg',
    },
  },
  {
    image: {
      uri: 'https://cdn3.dhht.vn/wp-content/uploads/2023/11/khai-truong-dong-ho-ha-noi-chi-nhanh-2-mb.jpg',
    },
  },
  {
    image: {
      uri: 'https://cdn3.dhht.vn/wp-content/uploads/2023/10/banner-trang-chu-dong-ho-hai-trieu-1.jpg',
    },
  },
];

export const menWatchCategory: ICategory = {
  _id: '654b4ad2ebaa54b1f90c4303',
  IDProduct: [],
  CategoryName: "Men's Watches",
  Description: 'This category contains watches for men.',
  slug: 'mens-watches',
  deleted: false,
  __v: 4,
  createdAt: '2023-11-08T08:46:10.019Z',
  updatedAt: '2023-11-21T00:13:30.913Z',
};

export const womenWatchCategory: ICategory = {
  _id: '654b4ad2ebaa54b1f90c4304',
  IDProduct: [],
  CategoryName: "Women's Watches",
  Description: 'This category contains watches for women.',
  slug: 'womens-watches',
  deleted: false,
  __v: 0,
  createdAt: '2023-11-08T08:46:10.019Z',
  updatedAt: '2023-11-21T00:13:30.743Z',
};
