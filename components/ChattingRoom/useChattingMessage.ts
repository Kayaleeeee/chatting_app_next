import { useDispatch } from 'react-redux';
import {
  postMessageToChattingRoom,
  removeMessageFromChattingRoom,
} from 'store/chatting/action';
import { ChattingMessageContentType } from 'store/chatting/type';
import { MY_UUID } from 'utils/constants/uuid';

export const useChattingMessage = (roomId: string) => {
  const dispatch = useDispatch();

  const handlePostMessage = (messageContent: ChattingMessageContentType) => {
    dispatch(
      postMessageToChattingRoom({
        roomId,
        message: {
          senderUuid: MY_UUID,
          content: messageContent,
          createdAt: new Date(),
        },
      }),
    );
  };

  const handleDeleteMessage = (contentId: string) => {
    dispatch(
      removeMessageFromChattingRoom({
        roomId,
        contentId,
      }),
    );
  };

  return { handlePostMessage, handleDeleteMessage };
};
