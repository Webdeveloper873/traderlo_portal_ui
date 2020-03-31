import { userActTypes } from 'appRedux/constants/ActionTypes';

export const getUserBids = (payload) => ({
  type: userActTypes.GET_USER_BIDS,
  payload
});

export const getUserBidsSuccess = (payload) => ({
  type: userActTypes.GET_USER_BIDS_SUCCESS,
  payload
});

export const getUserOrders = (payload) => ({
  type: userActTypes.GET_USER_ORDER,
  payload
});

export const getUserOrdersSuccess = (payload) => ({
  type: userActTypes.GET_USER_ORDER_SUCCESS,
  payload
});

export const getUserWatch = (payload) => ({
  type: userActTypes.GET_USER_WATCH,
  payload
});

export const getUserWatchSuccess = (payload) => ({
  type: userActTypes.GET_USER_WATCH_SUCCESS,
  payload
});

export const getWatchlistAuction = (payload) => ({
  type: userActTypes.GET_WATCHLIST_DOMAIN_WEBSITE,
  payload
});

export const getWatchlistAuctionSuccess = (payload) => ({
  type: userActTypes.GET_WATCHLIST_DOMAIN_WEBSITE_SUCCESS,
  payload
});

export const getWatchlistClassified = (payload) => ({
  type: userActTypes.GET_WATCHLIST_FAVORITES,
  payload
});

export const getWatchlistClassifiedSuccess = (payload) => ({
  type: userActTypes.GET_WATCHLIST_FAVORITES_SUCCESS,
  payload
});

export const getWatchlistSellers = (payload) => ({
  type: userActTypes.GET_WATCHLIST_SELLERS,
  payload
});

export const getWatchlistSellersSuccess = (payload) => ({
  type: userActTypes.GET_WATCHLIST_SELLERS_SUCCESS,
  payload
});