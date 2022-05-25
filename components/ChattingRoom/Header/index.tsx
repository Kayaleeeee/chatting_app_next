import Header from 'components/common/Header';
import styles from 'components/ChattingRoom/Header/index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  sender: string;
  onClickImageUploadIcon: () => void;
};

const ChattingRoomHeader = ({ sender, onClickImageUploadIcon }: Props) => {
  const router = useRouter();

  return (
    <Header>
      <span className={styles.inlineWrapper}>
        <div className={styles.iconWrapper} onClick={() => router.back()}>
          <Image
            src={'/images/icon/img-back.svg'}
            layout='fill'
            alt='back icon'
          />
        </div>

        <h3 className={styles.title}>{sender}</h3>

        <span className={styles.rightMenuWrapper}>
          <div className={styles.iconWrapper} onClick={onClickImageUploadIcon}>
            <Image
              src={'/images/icon/img-upload.svg'}
              layout='fill'
              alt='back icon'
            />
          </div>
          <div className={styles.margin} />
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/icon/img-search.svg'}
              layout='fill'
              alt='back icon'
            />
          </div>
        </span>
      </span>
    </Header>
  );
};

export default ChattingRoomHeader;
