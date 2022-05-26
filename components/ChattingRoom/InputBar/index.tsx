import styles from 'components/ChattingRoom/InputBar/index.module.scss';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { ChattingMessageContentType } from 'store/chatting/type';

type Props = {
  handlePostMessage: (message: ChattingMessageContentType) => void;
};

const InputBar = ({ handlePostMessage }: Props) => {
  const [text, setText] = useState<string>('');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const postMessage = () => {
    if (!!text) {
      handlePostMessage({
        contentId: new Date().getTime().toString(),
        type: 'text',
        value: text,
      });
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      postMessage();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        data-testid='message-input'
        className={styles.textInput}
        value={text}
        onChange={changeText}
        placeholder='메세지를 입력하세요..'
        onKeyPress={handleKeyPress}
      />
      <button
        className={styles.sendButton}
        data-testid='message-send-button'
        onClick={postMessage}
      >
        <div className={styles.sendIconWrapper}>
          <Image
            src={'/images/icon/img-send.svg'}
            layout='fill'
            alt='send icon'
          />
        </div>
      </button>
    </div>
  );
};

export default InputBar;
