import Image from 'next/image';
import styles from 'components/ChattingRoom/MessageList/Message/ImageMessage/index.module.scss';
import { useEffect, useState } from 'react';

type Props = {
  imageUrl: string;
};

const ImageMessage = ({ imageUrl }: Props) => {
  const [isUploding, setIsUploding] = useState(true);

  useEffect(() => {
    const setLoading = setTimeout(() => setIsUploding(false), 1000);
    return () => {
      clearTimeout(setLoading);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {isUploding && (
        <button className={styles.closeButton}>
          <div className={styles.closeIconWrapper}>
            <Image
              src={'/images/icon/img-close.svg'}
              layout='fill'
              alt='close icon'
            />
          </div>
        </button>
      )}

      <div
        className={styles.imageWrapper}
        style={{ opacity: isUploding ? 0.7 : 1 }}
      >
        <Image src={imageUrl} layout='fill' alt='chatting image source' />
      </div>
    </div>
  );
};

export default ImageMessage;
