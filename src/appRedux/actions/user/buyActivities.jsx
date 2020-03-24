import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getUserBids = (payload) => ({
  type: userActTypes.GET_USER_BIDS,
  payload
});