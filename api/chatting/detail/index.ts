import { request } from 'api/request';

export const fetchChattingDetail = (room_id: string) => {
  return request({
    url: '/chatting_detail',
    method: 'GET',
    data: room_id,
  });
};

export const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return request({
    url: `/uploadFile`,
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
