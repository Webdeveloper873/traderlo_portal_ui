//Home APIs
export const homeActions = {
  FETCH_FEATBLOGS: 'FETCH_FEATBLOGS',
  FETCH_FEATBLOGS_SUCCESS: 'FETCH_FEATBLOGS_SUCCESS',
  FETCH_FEATBLOGS_FAILED: 'FETCH_FEATBLOGS_FAILED',
  SUBSCRIBE_NEWSLETTER: 'SUBSCRIBE_NEWSLETTER',
  SUBSCRIBE_NEWSLETTER_FAILED: 'SUBSCRIBE_NEWSLETTER_FAILED',
  SUBSCRIBE_NEWSLETTER_SUCCESS: 'SUBSCRIBE_NEWSLETTER_SUCCESS',
  SUBSCRIBE_RESET_RESULT: 'SUBSCRIBE_RESET_RESULT',
};

export const userActTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  FETCH_PROFILE: 'FETCH_PROFILE',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS',
  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
}

export const sellDomainTypes = {
  SELL_DOMAIN: 'SELL_DOMAIN',
  SELL_DOMAIN_SUCCESS: 'SELL_DOMAIN_SUCCESS',
  PITCH: 'PITCH',
  PITCH_SUCCESS: 'PITCH_SUCCESS',
  SALE: 'SALE',
  SALE_SUCCESS: 'SALE_SUCCESS',
  TRAFFIC: 'TRAFFIC',
  TRAFFIC_SUCCESS: 'TRAFFIC_SUCCESS',
  PROMOTE: 'PROMOTE',
  PROMOTE_SUCCESS: 'PROMOTE_SUCCESS',
  VERIFY_TEXTFILE: 'VERIFY_TEXTFILE',
  VERIFY_TEXTFILE_SUCCESS: 'VERIFY_TEXTFILE_SUCCESS',
  GET_TEXT: 'GET_TEXT',
  GET_TEXT_SUCCESS: 'GET_TEXT_SUCCESS',
  VERIFY_META: 'VERIFY_META',
  VERIFY_META_SUCCESS: 'VERIFY_META_SUCCESS',
  GET_META: 'GET_META',
  GET_META_SUCCESS: 'GET_META_SUCCESS',
}

export const buyDomainTypes = {
  GET_BUY_DOMAIN: 'GET_BUY_DOMAIN',
  GET_BUY_DOMAIN_SUCCESS: 'GET_BUY_DOMAIN_SUCCESS',
  GET_BUY_DOMAIN_FAILED: 'GET_BUY_DOMAIN_FAILED',
  GET_BUY_DOMAIN_BY_ID: 'GET_BUY_DOMAIN_BY_ID',
  GET_BUY_DOMAIN_BY_ID_SUCCESS: 'GET_BUY_DOMAIN_BY_ID_SUCCESS',
  GET_BUY_DOMAIN_BY_ID_FAILED: 'GET_BUY_DOMAIN_BY_ID_FAILED',
  STORE_SELECTED_DOMAIN: 'STORE_SELECTED_DOMAIN',
  ADD_TO_WATCHLIST: 'ADD_TO_WATCHLIST',
  ADD_TO_WATCHLIST_SUCCESS: 'ADD_TO_WATCHLIST_SUCCESS',
}

export const bidDomainTypes = {
  SET_BID: "SET_BID",
  SET_BID_SUCCESS: "SET_BID_SUCCESS",
}