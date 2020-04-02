import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getChatUsers = (payload) => ({
  type: userActTypes.GET_CHAT_USERS,
  payload
});

export const getChatUsersSuccess = (payload) => ({
  type: userActTypes.GET_CHAT_USERS_SUCCESS,
  payload
});