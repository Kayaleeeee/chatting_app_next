import styles from 'components/ChattingRoom/MessageList/Message/index.module.scss';
import { ChattingMessageContentType } from 'store/chatting/type';
import { formatDateToTime } from 'utils/date';
import ImageMessage from '../ImageMessage';

type Props = {
  content: ChattingMessageContentType;
  createdAt?: Date;
};

const MyMessage = ({ content, createdAt }: Props) => {
  const renderMessgaeByType = () => {
    switch (content.type) {
      case 'image':
        return <ImageMessage imageUrl={content.value} />;
      case 'text':
        return <div className={styles.messageWrapper}>{content.value}</div>;
    }
  };

  return (
    <div className={styles.myMessageWrapper}>
      {!!createdAt && (
        <div className={styles.createdAtWrapper}>
          <p className={styles.createdAt}>
            {formatDateToTime(new Date(createdAt))}
          </p>
        </div>
      )}
      {renderMessgaeByType()}
    </div>
  );
};

export default MyMessage;
