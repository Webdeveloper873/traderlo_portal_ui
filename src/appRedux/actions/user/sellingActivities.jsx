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

export const getListingStatus = (payload) => ({
  type: userActTypes.GET_LISTING_STATUS,
  payload
});

export const getListingStatusSuccess = (payload) => ({
  type: userActTypes.GET_LISTING_STATUS_SUCCESS,
  payload
});

export const deleteSellListing = (payload) => ({
  type: userActTypes.DELETE_SELL_LISTING,
  payload,
});

export const deleteSellListingSuccess = (payload) => ({
  type: userActTypes.DELETE_SELL_LISTING_SUCCESS,
  payload,
});

export const deleteSellListingBidsSuccess = (payload) => ({
  type: userActTypes.DELETE_SELL_LISTING_BIDS_SUCCESS,
  payload,
});