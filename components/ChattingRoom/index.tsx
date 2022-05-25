import styles from 'components/ChattingRoom/index.module.scss';
import { useScreenSize } from 'hooks/useScreenSize';
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
  const { screenSize } = useScreenSize();

  return (
    <div
      className={styles.wrapper}
      style={
        screenSize.height
          ? { height: `calc(${screenSize.height}px - 2.75rem)` }
          : {}
      }
    >
      <ChattingMessageList messages={chattingDetail.messages} />
      <span className={styles.inputBarWrapper}>
        <InputBar handlePostMessage={handlePostMessage} />
      </span>
    </div>
  );
};

export default ChattingRoom;
