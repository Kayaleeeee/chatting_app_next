import { combineReducers, createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { chattingReducer } from 'store/chatting/reducer';

const mergedReducer = combineReducers({
  chattingReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return mergedReducer(state, action);
};

const makeStore = () => createStore(rootReducer);

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
