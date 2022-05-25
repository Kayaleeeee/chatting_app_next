import { ChattingMessageType } from 'store/chatting/type';
import { format } from 'date-fns';

export const groupByDate = (messageList: ChattingMessageType[]) => {
  return messageList.reduce(
    (prev: Record<string, ChattingMessageType[]>, acc: ChattingMessageType) => {
      const createdDate = format(new Date(acc.createdAt), 'yyyy-MM-dd');

      if (!prev[createdDate]) {
        prev[createdDate] = [acc];
      } else {
        prev[createdDate] = [...prev[createdDate], acc];
      }

      return prev;
    },
    {},
  );
};

export const groupByTime = (messageList: ChattingMessageType[]) => {
  return messageList.reduce(
    (prev: Record<string, ChattingMessageType[]>, acc: ChattingMessageType) => {
      const createdTime = format(new Date(acc.createdAt), 'yyyy-MM-dd hh:mm');

      if (!prev[createdTime]) {
        prev[createdTime] = [acc];
      } else {
        prev[createdTime] = [...prev[createdTime], acc];
      }

      return prev;
    },
    {},
  );
};

export const groupMessageContentBySender = (
  messageList: ChattingMessageType[],
) => {
  return messageList.reduce(
    (prev: Record<string, ChattingMessageType[]>, acc: ChattingMessageType) => {
      if (!prev[acc.senderUuid]) {
        prev[acc.senderUuid] = [acc];
      } else {
        prev[acc.senderUuid] = [...prev[acc.senderUuid], acc];
      }

      return prev;
    },
    {},
  );
};
