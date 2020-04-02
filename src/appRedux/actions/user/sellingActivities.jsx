import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getBidsPerf = (payload) => ({
  type: userActTypes.GET_SELLING_BIDS,
  payload
});

export const getBidsPerfSuccess = (payload) => ({
  type: userActTypes.GET_SELLING_BIDS_SUCCESS,
  payload
});

export const getCstmrOrder = (payload) => ({
  type: userActTypes.GET_SELLING_ORDERS,
  payload
});

export const getCstmrOrderSuccess = (payload) => ({
  type: userActTypes.GET_SELLING_ORDERS_SUCCESS,
  payload
});