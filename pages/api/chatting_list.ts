import { NextApiRequest, NextApiResponse } from 'next';
import { chattingListData } from 'api/data/chattingList';
import { ChattingListItemType } from 'store/chatting/type';

export default function ChattingListhandler(
  req: NextApiRequest,
  res: NextApiResponse<ChattingListItemType[]>,
) {
  res.status(200).json(chattingListData);
}
