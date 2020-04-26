import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  chatContacts: [],
  activeChatMsg: [],
  isOnline: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  const { isOnline } = payload || {};
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

      return { ...state,
        activeChatMsg: {
          ...activeChatMsg,
          chat: updatedChat
        },
      };
    case userActTypes.DELETE_CHAT_SUCCESS:
      const { chatContacts } = state || {};
      const updatedContacts = chatContacts.filter(x => {
        return x.id !== payload;
      });

      return { ...state,
        activeChatMsg: [],
        chatContacts: updatedContacts
      };
    case userActTypes.GET_ONLINE_STATUS_SUCCESS:
      return { ...state,
        isOnline: isOnline === 'y' ? true : false
      };
    case userActTypes.GET_ONLINE_STATUS_FAILED:
      return { ...state, isOnline: false };
    default:
      return state;
  }
}