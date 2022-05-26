import styles from 'components/ChattingList/Item/index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChattingListItemType } from 'store/chatting/type';
import { formatCreatedAtDateTime } from 'utils/date';

type Props = {
  item: ChattingListItemType;
};

const ChattingListItem = ({ item }: Props) => {
  const router = useRouter();

  const moveToChattingRoom = () => {
    router.push(`/room/${item.roomId}`);
  };

  return (
    <span className={styles.wrapper} onClick={moveToChattingRoom}>
      <div className={styles.profileImageWrapper}>
        <Image
          className={styles.profileImage}
          src={item.profileImageSrc}
          alt={'profile image'}
          layout='fill'
        />
      </div>
      <div className={styles.messageSenderWrapper}>
        <p className={styles.sender}>{item.sender}</p>
        <p className={styles.message}>{item.lastMessage}</p>
      </div>
      <div className={styles.createdAtAndMessageCountWrapper}>
        <p className={styles.createdAt}>
          {formatCreatedAtDateTime(item.createdAt)}
        </p>
        {item.unreadMessageCount > 0 && (
          <div className={styles.messageCount}>{item.unreadMessageCount}</div>
        )}
      </div>
    </span>
  );
};

export default ChattingListItem;
