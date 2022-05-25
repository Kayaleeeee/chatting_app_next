import { request } from 'api/request';

export const fetchChattingListApi = () => {
  return request({
    url: `/chatting_list`,
    method: 'get',
  });
};
