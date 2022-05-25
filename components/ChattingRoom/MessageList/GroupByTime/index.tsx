import styles from 'components/ChattingRoom/MessageList/GroupByTime/index.module.scss';
import { ChattingMessageType } from 'store/chatting/type';
import { groupMessageContentBySender } from 'utils/group_message';
import Message from '../Message';

type Props = {
  messageGroupByTime: ChattingMessageType[];
};

const MessageGroupByTime = ({ messageGroupByTime }: Props) => {
  const messageGroupBySender = groupMessageContentBySender(messageGroupByTime);

  return (
    <div className={styles.wrapper}>
      {Object.keys(messageGroupBySender).map((senderUuid) => {
        const messageListBySender = messageGroupBySender[senderUuid];

        return (
          <div key={senderUuid} className={styles.messageListWrapper}>
            <div className={styles.messageListWrapper}>
              {messageListBySender.map((message, index) => {
                return (
                  <Message
                    key={message.content.contentId}
                    message={message}
                    createdAt={
                      index === messageListBySender.length - 1
                        ? new Date(message.createdAt)
                        : undefined
                    }
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageGroupByTime;
