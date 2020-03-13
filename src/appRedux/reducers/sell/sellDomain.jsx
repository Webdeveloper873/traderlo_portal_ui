import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  listingId: null,
  pitch: false,
  sale: false,
  traffic: false,
  promote: false,
  verifyOwnership: false,
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case sellDomainTypes.SELL_DOMAIN_SUCCESS:
      const {id} = payload || {};
      return { ...state, listingId: id };
    case sellDomainTypes.PITCH_SUCCESS:
      return { ...state, pitch: true};
    default:
      return state;
  }
}