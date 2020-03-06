import { homeActions } from 'appRedux/constants/ActionTypes';

const intialState = {
  subscribeResult: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case homeActions.SUBSCRIBE_NEWSLETTER_SUCCESS:
      return { ...state, subscribeResult: true };
    case homeActions.SUBSCRIBE_NEWSLETTER_FAILED:
      return { ...state, subscribeResult: false };
    case homeActions.SUBSCRIBE_RESET_RESULT:
      return { ...state, subscribeResult: null };
    default:
      return state;
  }
}