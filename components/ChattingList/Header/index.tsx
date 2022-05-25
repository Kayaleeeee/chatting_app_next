import Header from 'components/common/Header';
import styles from 'components/ChattingRoom/Header/index.module.scss';
import Image from 'next/image';

const ChattingListHeader = () => {
  return (
    <Header>
      <span className={styles.inlineWrapper}>
        <div className={styles.iconWrapper}>
          <Image
            src={'/images/icon/rectangle.svg'}
            layout='fill'
            alt='back icon'
          />
        </div>

        <h3 className={styles.title}>채팅</h3>

        <div className={styles.iconWrapper}>
          <Image
            src={'/images/icon/profile-icon.svg'}
            layout='fill'
            alt='back icon'
          />
        </div>
      </span>
    </Header>
  );
};

export default ChattingListHeader;
