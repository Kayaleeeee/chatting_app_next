import ChattingRoom from 'components/ChattingRoom';
import ChattingRoomHeader from 'components/ChattingRoom/Header';
import ImageList from 'components/ChattingRoom/ImageUploader/ImageList';
import { useEffect, useState } from 'react';
import { ImageListData } from 'api/data/imageList';
import { fetchChattingDetail } from 'api/chatting/detail';
import { useDispatch } from 'react-redux';
import {
  setChattingAsRead,
  setChattingDetailData,
} from 'store/chatting/action';
import { NextPage } from 'next';
import { RootState, wrapper } from 'store';
import { connect } from 'react-redux';
import { useChattingMessage } from 'components/ChattingRoom/useChattingMessage';

const ChattingRoomPage: NextPage<RootState> = ({
  chattingReducer: { detail },
}) => {
  const dispatch = useDispatch();
  const [isOpenedImageList, setIsOpenedImageList] = useState(false);
  const { handlePostMessage } = useChattingMessage(detail.user.uuid);

  const onClickImageUploadIcon = () => {
    setIsOpenedImageList(!isOpenedImageList);
  };

  useEffect(() => {
    dispatch(setChattingAsRead({ roomId: detail.user.uuid }));
  }, [dispatch, detail.user.uuid]);

  return (
    <>
      <ChattingRoomHeader
        sender={detail.user.name}
        onClickImageUploadIcon={onClickImageUploadIcon}
      />
      <ImageList
        imageList={ImageListData}
        isOpend={isOpenedImageList}
        handlePostMessage={handlePostMessage}
      />
      <ChattingRoom
        chattingDetail={detail}
        handlePostMessage={handlePostMessage}
      />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const room_id = query.room_id as string;
      const { dispatch } = store;

      const { data } = await fetchChattingDetail(room_id);
      dispatch(setChattingDetailData(data));

      return {
        props: {},
      };
    },
);

export default connect((state: RootState) => state)(ChattingRoomPage);
