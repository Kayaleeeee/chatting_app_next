import { ChattingMessageType } from 'store/chatting/type';
import { MY_UUID } from 'utils/constants/uuid';
import MyMessage from './MyMessage';
import PartnerMessage from './PartnerMessage';

type Props = {
  message: ChattingMessageType;
  createdAt?: Date;
};

const TextMessage = ({ message, createdAt }: Props) => {
  return message.senderUuid === MY_UUID ? (
    <MyMessage content={message.content} createdAt={createdAt} />
  ) : (
    <PartnerMessage content={message.content} createdAt={createdAt} />
  );
};

export default TextMessage;
