import { NextApiRequest, NextApiResponse } from 'next';
import { chattingDetailDataList } from 'api/data/chattingDetail';
import { ChattingDetailType } from 'store/chatting/type';

export default function ChattingDetailhandler(
  req: NextApiRequest,
  res: NextApiResponse<ChattingDetailType>,
) {
  const roomId = req.body;

  const chattingDetailfoundByRoomId = chattingDetailDataList.find(
    (detailData) => detailData.user.uuid === roomId,
  );

  if (!!chattingDetailfoundByRoomId) {
    res.status(200).json(chattingDetailfoundByRoomId);
  } else {
    res.status(404);
  }
}
