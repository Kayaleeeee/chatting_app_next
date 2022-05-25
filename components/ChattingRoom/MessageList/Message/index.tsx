import { ChattingMessageType } from 'store/chatting/type';
import ImageMessage from './ImageMessage';
import TextMessage from './TextMessage';

type Props = {
  message: ChattingMessageType;
  createdAt?: Date;
};

const Message = ({ message, createdAt }: Props) => {
  switch (message.content.type) {
    case 'text':
      return <TextMessage message={message} createdAt={createdAt} />;
    case 'image':
      return <ImageMessage imageUrl={message.content.value} />;
  }
};

export default Message;
