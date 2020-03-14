import { buyDomainTypes } from 'appRedux/constants/ActionTypes';

export const getBuyDomain = () => ({
  type: buyDomainTypes.GET_BUY_DOMAIN,
})

export const getBuyDomainSuccess = (payload) => (
  {
  type: buyDomainTypes.GET_BUY_DOMAIN_SUCCESS,
  payload
})

export const getBuyDomainById = (id) => ({
  type: buyDomainTypes.GET_BUY_DOMAIN_BY_ID,
  payload: {
    id : 1 //TODO: change this one
  }
})