import { userSidebarInfoTypes } from 'appRedux/constants/ActionTypes';

export const getWatchlistDomainWebsite = (payload) => ({
  type: userSidebarInfoTypes.GET_WATCHLIST_DOMAIN_WEBSITE,
  payload
});

export const getWatchlistFavorites = (payload) => ({
  type: userSidebarInfoTypes.GET_WATCHLIST_FAVORITES,
  payload
});

export const getWatchlistSellers = (payload) => ({
  type: userSidebarInfoTypes.GET_WATCHLIST_SELLERS,
  payload
});