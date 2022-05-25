import { ChattingMessageType } from 'store/chatting/type';
import styles from 'components/ChattingRoom/MessageList/index.module.scss';
import { useEffect, useRef } from 'react';
import { groupByDate } from 'utils/group_message';
import MessageGroupByDate from './GroupByDate';

type Props = {
  messages: ChattingMessageType[];
};

const ChattingMessageList = ({ messages }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const messageListGroupByDate = groupByDate(messages);

  useEffect(() => {
    const scrollHeight = ref.current?.scrollHeight;

    if (!!scrollHeight) {
      ref.current?.scrollTo({ top: scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.messageListWrapper} ref={ref}>
      {Object.keys(messageListGroupByDate).map((messageDate) => {
        return (
          <MessageGroupByDate
            key={messageDate}
            date={messageDate}
            messageListByDate={messageListGroupByDate[messageDate]}
          />
        );
      })}
    </div>
  );
};

export default ChattingMessageList;
