import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

export const sale = (payload) => ({
  type: sellDomainTypes.SALE,
  payload
})