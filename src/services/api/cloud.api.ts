import {CLOUDINARY_BASE_URL, CLOUDINARY_CLOUD_NAME} from '../../config';
import instance from './axios';

const ENDPOINTS = {
  LISTPRODUCT: '/products',
  CATEGORY: '/category',
};

const addNewImage = (photo: any) => {
  const formData = new FormData();
  formData.append('file', {
    uri: photo.uri,
    type: 'image/jpeg',
    name: photo.fileName,
  });
  formData.append('upload_preset', 'wjnhxgo6');
  formData.append('cloud_name', CLOUDINARY_CLOUD_NAME);
  formData.append('folder', 'Cloudinary-React');

  return instance.post(`/${CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {
    baseURL: CLOUDINARY_BASE_URL,
    headers: {
      'Content-Type': `multipart/form-data`,
      Authorization: '',
    },
  });
};

export const CloudyApi = {
  addNewImage,
};
