import { createReducer } from 'typesafe-actions';
import {
  ChattingAction,
  SET_CHATTING_LIST,
  SET_CHATTING_DETAIL,
  READ_CHATTING,
  POST_MESSAGE,
  REMOVE_MESSAGE,
} from './action';
import { ChattingListItemType, ChattingReducerState } from './type';

const initialState: ChattingReducerState = {
  list: [],
  detail: {
    user: {
      uuid: '',
      name: '',
    },
    messages: [],
  },
};

export const chattingReducer = createReducer<
  ChattingReducerState,
  ChattingAction
>(initialState, {
  [SET_CHATTING_LIST]: (state, action) => ({
    ...state,
    list: action.payload,
  }),

  [SET_CHATTING_DETAIL]: (state, action) => ({
    ...state,
    detail: action.payload,
  }),

  [READ_CHATTING]: (state, action) => ({
    ...state,
    list: findChattingListAndSetToRead(action.payload.roomId, state.list),
  }),

  [POST_MESSAGE]: (state, action) => ({
    ...state,
    detail: {
      ...state.detail,
      messages: state.detail.messages.concat(action.payload.message),
    },
  }),

  [REMOVE_MESSAGE]: (state, action) => ({
    ...state,
  }),
});

const findChattingListAndSetToRead = (
  roomId: string,
  chattingList: ChattingListItemType[],
) => {
  return chattingList.map((chatting) =>
    roomId === chatting.roomId
      ? { ...chatting, unreadMessageCount: 0 }
      : chatting,
  );
};
