import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getUserBids = (payload) => ({
  type: userActTypes.GET_USER_BIDS,
  payload
});

export const getUserBidsSuccess = (payload) => ({
  type: userActTypes.GET_USER_BIDS_SUCCESS,
  payload
});