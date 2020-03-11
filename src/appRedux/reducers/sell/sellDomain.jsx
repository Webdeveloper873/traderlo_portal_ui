import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  listingId: null,
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case sellDomainTypes.SELL_DOMAIN_SUCCESS:
      const {id} = payload || {};
      return { ...state, listingId: id };
    default:
      return state;
  }
}