import { buyDomainTypes } from 'appRedux/constants/ActionTypes';

export const getBuyDomain = (payload) => ({
  type: buyDomainTypes.GET_BUY_DOMAIN,
  payload
})

export const getBuyDomainSuccess = (payload) => (
  {
  type: buyDomainTypes.GET_BUY_DOMAIN_SUCCESS,
  payload
})

export const getBuyDomainById = (payload) => ({
  type: buyDomainTypes.GET_BUY_DOMAIN_BY_ID,
  payload
})

export const storeSelectedDomain = (payload) => ({
  type: buyDomainTypes.STORE_SELECTED_DOMAIN,
  payload
})

export const addToWatchlist = (payload) => ({
  type: buyDomainTypes.ADD_TO_WATCHLIST,
  payload
})

export const addToWatchlistSuccess = (payload) => ({
  type: buyDomainTypes.ADD_TO_WATCHLIST_SUCCESS,
  payload
})

export const removeToWatchlist = (payload) => ({
  type: buyDomainTypes.REMOVE_TO_WATCHLIST,
  payload
})

export const removeToWatchlistSuccess = (payload) => ({
  type: buyDomainTypes.REMOVE_TO_WATCHLIST_SUCCESS,
  payload
})