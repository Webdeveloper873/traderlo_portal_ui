import { sellDomainTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  listingId: null,
  pitch: false,
  sale: false,
  traffic: false,
  promote: false,
  verifyOwnership: false,
  randomText: null,
  meta: null,
};

export default (state = intialState, action) => {
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
      console.log('text payload', payload);
      return { ...state, randomText: payload};
    case sellDomainTypes.GET_META_SUCCESS:
      console.log('meta payload', payload);
      return { ...state, meta: payload};
    default:
      return state;
  }
}