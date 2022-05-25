import ChattingListItem from './Item';
import styles from 'components/ChattingList/index.module.scss';
import { ChattingListItemType } from 'store/chatting/type';

type Props = {
  chattingList: ChattingListItemType[];
};

const ChattingList = ({ chattingList }: Props) => {
  return (
    <div className={styles.wrapper}>
      {chattingList.map((chattingItem) => {
        return (
          <ChattingListItem key={chattingItem.roomId} item={chattingItem} />
        );
      })}
    </div>
  );
};

export default ChattingList;
