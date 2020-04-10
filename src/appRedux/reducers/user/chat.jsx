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
    case userActTypes.SEND_CHAT_SUCCESS:
      const { activeChatMsg } = state;
      const { chat } = activeChatMsg || {};
      let updatedChat = chat;
      updatedChat.push(payload);
      return { ...state, activeChatMsg: { ...activeChatMsg, chat: updatedChat } };
    case userActTypes.DELETE_CHAT_SUCCESS:
      const { chatContacts } = state || {};
      const updatedContacts = chatContacts.filter(x => {
        return x.id !== payload;
      });
      return { ...state, activeChatMsg: [], chatContacts: updatedContacts  };
    default:
      return state;
  }
}