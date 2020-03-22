import { bidDomainTypes } from 'appRedux/constants/ActionTypes';

export const setBid = (payload) => ({
  type: bidDomainTypes.SET_BID,
  payload
});

export const setBidSuccess = (payload) => ({
  type: bidDomainTypes.SET_BID_SUCCESS,
  payload
});

export const setBidFailed = () => ({
  type: bidDomainTypes.SET_BID_FAILED,
});

export const resetBid = () => ({
  type: bidDomainTypes.RESET_BID,
});