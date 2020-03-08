import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

export const sellDomain = (url) => ({
  type: sellDomainTypes.SELL_DOMAIN,
  payload: { url }
})