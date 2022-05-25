import styles from 'components/ChattingRoom/index.module.scss';
import {
  ChattingDetailType,
  ChattingMessageContentType,
} from 'store/chatting/type';
import InputBar from './InputBar';
import ChattingMessageList from './MessageList';

type Props = {
  chattingDetail: ChattingDetailType;
  handlePostMessage: (messageContent: ChattingMessageContentType) => void;
};

const ChattingRoom = ({ chattingDetail, handlePostMessage }: Props) => {
  return (
    <div className={styles.wrapper}>
      <ChattingMessageList messages={chattingDetail.messages} />
      <span className={styles.inputBarWrapper}>
        <InputBar handlePostMessage={handlePostMessage} />
      </span>
    </div>
  );
};

export default ChattingRoom;
