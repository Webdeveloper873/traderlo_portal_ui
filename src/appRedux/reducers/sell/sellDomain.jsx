import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  listingId: null,
  pitch: false,
  sale: false,
  traffic: false,
  promote: false,
  verifyOwnership: false,
  randomText: null,
  meta: null,
  categories: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case sellDomainTypes.SELL_DOMAIN_SUCCESS:
      const { id, url } = payload || {};
      return { ...state,
        listingId: id,
        url,
      };
    case sellDomainTypes.PITCH_SUCCESS:
      return { ...state, pitch: true};
    case sellDomainTypes.SALE_SUCCESS:
      return { ...state, sale: true};
    case sellDomainTypes.TRAFFIC_SUCCESS:
      return { ...state, traffic: true};
    case sellDomainTypes.PROMOTE_SUCCESS:
      return { ...state, promote: true};
    case sellDomainTypes.VERIFY_TEXTFILE_SUCCESS:
    case sellDomainTypes.VERIFY_META_SUCCESS:
      return { ...state, verifyOwnership: true};
    case sellDomainTypes.GET_TEXT_SUCCESS:
      return { ...state, randomText: payload};
    case sellDomainTypes.GET_META_SUCCESS:
      return { ...state, meta: payload};
    case sellDomainTypes.GET_PITCH_CATEG_SUCCESS:
      return { ...state, categories: payload};
    case sellDomainTypes.SET_LISTING_ID:
      return { ...state, listingId: payload};
    case sellDomainTypes.INITIALIZE_SELL:
      return initialState;
    default:
      return state;
  }
}