import ChattingList from 'components/ChattingList';
import ChattingListHeader from 'components/ChattingList/Header';
import { RootState, wrapper } from 'store';
import { connect } from 'react-redux';
import { setChattingListData } from 'store/chatting/action';
import { fetchChattingListApi } from 'api/chatting/list';
import { NextPage } from 'next';

const ChattingListPage: NextPage<RootState> = ({
  chattingReducer: { list },
}) => {
  return (
    <>
      <ChattingListHeader />
      <ChattingList chattingList={list} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch } = store;

    const { data } = await fetchChattingListApi();
    dispatch(setChattingListData(data));

    return {
      props: {},
    };
  },
);

export default connect((state: RootState) => state)(ChattingListPage);
