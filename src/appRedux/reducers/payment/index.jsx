import { paymentTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  isDone: false,
  hasError: false,
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case paymentTypes.VERIFY_CARD_SUCCESS:
      return { ...state, isDone: true };
    case paymentTypes.ADD_ACCOUNT_SUCCESS:
      return { ...state, isDone: true };
    case paymentTypes.VERIFY_CARD_FAILED:
      return { ...state, hasError: true };
    case paymentTypes.ADD_ACCOUNT_FAILED:
      return { ...state, hasError: true };
    default:
      return state;
  }
}