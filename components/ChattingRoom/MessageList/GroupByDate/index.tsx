import styles from 'components/ChattingRoom/MessageList/GroupByDate/index.module.scss';
import { ChattingMessageType } from 'store/chatting/type';
import { groupByTime } from 'utils/group_message';
import MessageGroupByTime from '../GroupByTime';

type Props = {
  date: string;
  messageListByDate: ChattingMessageType[];
};

const MessageGroupByDate = ({ date, messageListByDate }: Props) => {
  const messageGroupByTime = groupByTime(messageListByDate);

  return (
    <div className={styles.wrapper}>
      <span className={styles.dateWrapper}>
        <div className={styles.divider} />
        <p className={styles.date}>{date}</p>
        <div className={styles.divider} />
      </span>

      <div>
        {Object.keys(messageGroupByTime).map((maessageTime) => {
          return (
            <MessageGroupByTime
              key={maessageTime}
              messageGroupByTime={messageGroupByTime[maessageTime]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessageGroupByDate;
