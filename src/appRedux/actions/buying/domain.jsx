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