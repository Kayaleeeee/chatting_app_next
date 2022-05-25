import { ActionType, createAction } from 'typesafe-actions';
import {
  ChattingDetailType,
  ChattingListItemType,
  ChattingReadPayload,
  PostChattingMessagePaylod,
  RemoveChattingMessagePayload,
} from './type';

export const SET_CHATTING_LIST = 'chatting/list/SET_CHATTING_LIST';
export const SET_CHATTING_DETAIL = 'chatting/detail/SET_CHATTING_DETAIL';
export const READ_CHATTING = 'chatting/list/READ_CHATTING';
export const POST_MESSAGE = 'chatting/detail/POST_MESSAGE';
export const REMOVE_MESSAGE = 'chatting/detail/REMOVE_MESSAGE';

export const setChattingListData =
  createAction(SET_CHATTING_LIST)<ChattingListItemType[]>();

export const setChattingDetailData =
  createAction(SET_CHATTING_DETAIL)<ChattingDetailType>();

export const setChattingAsRead =
  createAction(READ_CHATTING)<ChattingReadPayload>();

export const postMessageToChattingRoom =
  createAction(POST_MESSAGE)<PostChattingMessagePaylod>();

export const removeMessageFromChattingRoom =
  createAction(REMOVE_MESSAGE)<RemoveChattingMessagePayload>();

export type ChattingAction =
  | ActionType<typeof setChattingListData>
  | ActionType<typeof setChattingDetailData>
  | ActionType<typeof setChattingAsRead>
  | ActionType<typeof postMessageToChattingRoom>
  | ActionType<typeof removeMessageFromChattingRoom>;
