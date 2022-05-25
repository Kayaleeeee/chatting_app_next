export type ChattingListItemType = {
  roomId: string;
  profileImageSrc: string;
  sender: string;
  lastMessage: string;
  unreadMessageCount: number;
  createdAt: string;
};

export type ChattingReducerState = {
  list: ChattingListItemType[];
  detail: ChattingDetailType;
};

export type ChattingDetailType = {
  user: ChattingUiserType;
  messages: ChattingMessageType[];
};

export type ChattingMessageType = {
  senderUuid: string;
  content: ChattingMessageContentType;
  createdAt: Date;
};

export type ChattingMessageContentType = {
  contentId: string;
  type: ContentType;
  value: string;
};

type ChattingUiserType = {
  uuid: string;
  name: string;
};

type ContentType = 'text' | 'image';

export type ChattingReadPayload = {
  roomId: string;
};

export type PostChattingMessagePaylod = {
  roomId: string;
  message: ChattingMessageType;
};

export type RemoveChattingMessagePayload = {
  roomId: string;
  contentId: string;
};
