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
      console.log('state: ', state);
      console.log('activeChatMsg: ', activeChatMsg);
      console.log('chat: ', chat);
      console.log('payload: ', payload);
      let updatedChat = chat;
      updatedChat.push(payload);
      console.log('updatedChat: ', updatedChat);
      return { ...state, activeChatMsg: { ...activeChatMsg, chat: updatedChat } };
    default:
      return state;
  }
}