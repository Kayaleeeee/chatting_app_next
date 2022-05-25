import styles from 'components/ChattingRoom/ImageUploader/ImageList/index.module.scss';
import Image from 'next/image';
import { ChattingMessageContentType } from 'store/chatting/type';

type Props = {
  isOpend: boolean;
  imageList: string[];
  handlePostMessage: (messageContent: ChattingMessageContentType) => void;
};

const ImageList = ({ imageList, isOpend, handlePostMessage }: Props) => {
  const handleClickImage = (url: string) => {
    handlePostMessage({
      contentId: new Date().getTime().toString(),
      type: 'image',
      value: url,
    });
  };

  if (!isOpend) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      {imageList.map((imageSrc, index) => {
        return (
          <div
            className={styles.imageWrapper}
            key={`${imageSrc}_${index}`}
            onClick={() => handleClickImage(imageSrc)}
          >
            <Image
              className={styles.image}
              src={imageSrc}
              layout='fill'
              alt={'upload image source'}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
