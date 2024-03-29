import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getChatUsers = (payload) => ({
  type: userActTypes.GET_CHAT_USERS,
  payload
});

export const getChatUsersSuccess = (payload) => ({
  type: userActTypes.GET_CHAT_USERS_SUCCESS,
  payload
});

export const getChatMsg = (id) => ({
  type: userActTypes.GET_CHAT_MSG,
  payload: {
    id
  }
});

export const getChatMsgSuccess = (payload) => ({
  type: userActTypes.GET_CHAT_MSG_SUCCESS,
  payload
});

export const sendChat = (payload) => ({
  type: userActTypes.SEND_CHAT,
  payload
});

export const sendChatSuccess = (payload) => ({
  type: userActTypes.SEND_CHAT_SUCCESS,
  payload
});

export const deleteChat = (payload) => ({
  type: userActTypes.DELETE_CHAT,
  payload
});

export const deleteChatSuccess = (payload) => ({
  type: userActTypes.DELETE_CHAT_SUCCESS,
  payload
});

export const getOnlineStatus = (payload) => ({
  type: userActTypes.GET_ONLINE_STATUS,
  payload
});

export const getOnlineStatusSuccess = () => ({
  type: userActTypes.GET_ONLINE_STATUS_SUCCESS,
});

export const getOnlineStatusFailed = () => ({
  type: userActTypes.GET_ONLINE_STATUS_FAILED,
});
