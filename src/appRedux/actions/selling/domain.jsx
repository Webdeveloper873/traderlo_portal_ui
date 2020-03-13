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