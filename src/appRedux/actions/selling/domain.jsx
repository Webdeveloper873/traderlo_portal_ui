import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

export const sellDomain = (url) => ({
  type: sellDomainTypes.SELL_DOMAIN,
  payload: { url }
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
