import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  chatContacts: [],
  activeChatMsg: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case userActTypes.GET_CHAT_USERS_SUCCESS:
      return { ...state, chatContacts: payload };
    case userActTypes.GET_CHAT_MSG_SUCCESS:
      return { ...state, activeChatMsg: payload };
    default:
      return state;
  }
}