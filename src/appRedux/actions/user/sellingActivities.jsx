import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getBidsPerf = (payload) => ({
  type: userActTypes.GET_SELLING_BIDS,
  payload
});

export const getBidsPerfSuccess = (payload) => ({
  type: userActTypes.GET_SELLING_BIDS_SUCCESS,
  payload
});