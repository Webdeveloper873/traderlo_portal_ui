import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

export const initializeSelling = () => ({
  type: sellDomainTypes.INITIALIZE_SELL,
});

export const sellDomain = (payload) => ({
  type: sellDomainTypes.SELL_DOMAIN,
  payload
});

export const sellDomainSuccess = (payload) => ({
  type: sellDomainTypes.SELL_DOMAIN_SUCCESS,
  payload
});

export const setPitch = (payload) => ({
  type: sellDomainTypes.PITCH,
  payload
});

export const setPitchSuccess = () => ({
  type: sellDomainTypes.PITCH_SUCCESS,
});

export const setSale = (payload) => ({
  type: sellDomainTypes.SALE,
  payload
});

export const setSaleSuccess = () => ({
  type: sellDomainTypes.SALE_SUCCESS,
});

export const setTraffic = (payload) => ({
  type: sellDomainTypes.TRAFFIC,
  payload
});

export const setTrafficSuccess = () => ({
  type: sellDomainTypes.TRAFFIC_SUCCESS
});

export const setPromote = (payload) => ({
  type: sellDomainTypes.PROMOTE,
  payload
});

export const setPromoteSuccess = () => ({
  type: sellDomainTypes.PROMOTE_SUCCESS
});

export const verifyByTextFile = (payload) => ({
  type: sellDomainTypes.VERIFY_TEXTFILE,
  payload
});

export const verifyTextFileSuccess = (payload) => ({
  type: sellDomainTypes.VERIFY_TEXTFILE_SUCCESS,
  payload
});

export const verifyByMetaTag = (payload) => ({
  type: sellDomainTypes.VERIFY_META,
  payload
});

export const verifyByMetaSuccess = (payload) => ({
  type: sellDomainTypes.VERIFY_META_SUCCESS,
  payload
});

export const getRandText = () => ({
  type: sellDomainTypes.GET_TEXT
});

export const getRandTextSuccess = (payload) => ({
  type: sellDomainTypes.GET_TEXT_SUCCESS,
  payload,
});

export const getMetaKey = () => ({
  type: sellDomainTypes.GET_META,
});

export const getMetaSuccess = (payload) => ({
  type: sellDomainTypes.GET_META_SUCCESS,
  payload,
});

export const getPitchCateg = () => ({
  type: sellDomainTypes.GET_PITCH_CATEG,
});

export const getPitchCategSuccess = (payload) => ({
  type: sellDomainTypes.GET_PITCH_CATEG_SUCCESS,
  payload,
});

export const setListingId = (payload) => ({
  type: sellDomainTypes.SET_LISTING_ID,
  payload
});

export const resetSellDomain = () => ({
  type: sellDomainTypes.RESET_SELL_DOMAIN,
});