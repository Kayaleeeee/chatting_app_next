import { request } from 'api/request';

export const fetchChattingDetail = (room_id: string) => {
  return request({
    url: '/chatting_detail',
    method: 'GET',
    data: room_id,
  });
};
