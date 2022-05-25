import styles from 'components/ChattingRoom/MessageList/Message/TextMessage/index.module.scss';
import { ChattingMessageContentType } from 'store/chatting/type';
import { formatDateToTime } from 'utils/date';

type Props = {
  content: ChattingMessageContentType;
  createdAt?: Date;
};

const MyMessage = ({ content, createdAt }: Props) => {
  return (
    <div className={styles.myMessageWrapper}>
      {!!createdAt && (
        <div className={styles.createdAtWrapper}>
          <p className={styles.createdAt}>
            {formatDateToTime(new Date(createdAt))}
          </p>
        </div>
      )}
      <div className={styles.messageWrapper}>{content.value}</div>
    </div>
  );
};

export default MyMessage;
