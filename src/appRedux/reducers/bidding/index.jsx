import { bidDomainTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  bidFailed: null,
};

export default (state = initialState, action) => {
  const { type } = action || {};
  switch (type) {
    case bidDomainTypes.SET_BID_FAILED:
      return { ...state, bidFailed: true};
    case bidDomainTypes.RESET_BID:
      return initialState;
    default:
      return state;
  }
}