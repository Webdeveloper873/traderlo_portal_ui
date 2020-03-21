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
  LOGIN_FAILED: 'LOGIN_FAILED',
  FETCH_PROFILE: 'FETCH_PROFILE',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS',
  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  GET_SAVED_BANKS: 'GET_SAVED_BANKS',
  GET_SAVED_BANKS_SUCCESS: 'GET_SAVED_BANKS_SUCCESS',
  GET_SAVED_CARDS: 'GET_SAVED_CARD',
  GET_SAVED_CARDS_SUCCESS: 'GET_SAVED_CARD_SUCCESS',
  RESET: 'RESET_USER',
}

export const sellDomainTypes = {
  INITIALIZE_SELL: 'INITIALIZE_SELL',
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
  REMOVE_TO_WATCHLIST: 'REMOVE_TO_WATCHLIST',
  REMOVE_TO_WATCHLIST_SUCCESS: 'REMOVE_TO_WATCHLIST_SUCCESS',
}

export const bidDomainTypes = {
  SET_BID: "SET_BID",
  SET_BID_SUCCESS: "SET_BID_SUCCESS",
}

export const paymentTypes = {
  VERIFY_CARD: "VERIFY_CARD",
  VERIFY_CARD_SUCCESS: "VERIFY_CARD_SUCCESS",
  VERIFY_CARD_FAILED: 'VERIFY_CARD_FAILED',
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_ACCOUNT_SUCCESS: 'ADD_ACCOUNT_SUCCESS',
  ADD_ACCOUNT_FAILED: 'ADD_ACCOUNT_FAILED',
  CHARGE: 'CHARGE',
  CHARGE_SUCCESS: 'CHARGE_SUCCESS',
  CHARGE_FAILED: 'CHARGE_FAILED', 
  CLEAR_PAYMENT_STEPS: 'CLEAR_PAYMENT_STEPS',
}

export const userSidebarInfoTypes ={
  GET_WATCHLIST_DOMAIN_WEBSITE: 'GET_WATCHLIST_DOMAIN_WEBSITE',
  GET_WATCHLIST_DOMAIN_WEBSITE_SUCCESS: 'GET_WATCHLIST_DOMAIN_WEBSITE_SUCCESS',
  GET_WATCHLIST_FAVORITES: 'GET_WATCHLIST_FAVORITES_SUCCESS',
  GET_WATCHLIST_FAVORITES_SUCCESS : 'GET_WATCHLIST_FAVORITES_SUCCESS',
  GET_WATCHLIST_SELLERS: 'GET_WATCHLIST_SELLERS',
  GET_WATCHLIST_SELLERS_SUCCESS : 'GET_WATCHLIST_SELLERS_SUCCESS',
}