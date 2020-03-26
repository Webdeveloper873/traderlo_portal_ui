import { paymentTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  isDone: false,          // take to the next step
  hasError: false,        //show the exclamation icon
  isPayment: false,       //show either payment or verification
  hasNotification: false, // show notification after a transaction
};

export default (state = intialState, action) => {
  const { type } = action || {};
  switch (type) {
    case paymentTypes.VERIFY_CARD_SUCCESS:
      return { ...state, isDone: true };
    case paymentTypes.VERIFY_CARD_FAILED:
      return { ...state, isDone: true, hasError: true };
    case paymentTypes.DELETE_CARD_SUCCESS:
      return { ...state };
    case paymentTypes.ADD_ACCOUNT_SUCCESS:
      return { ...state, isDone: true };
    case paymentTypes.ADD_ACCOUNT_FAILED:
      return { ...state, isDone: true, hasError: true };
    case paymentTypes.DELETE_ACCOUNT_SUCCESS:
      return { ...state };
    case paymentTypes.CHARGE_SUCCESS:
      return { ...state,isDone: true, isPayment: true };
    case paymentTypes.CHARGE_FAILED:
      return { ...state,isDone: true, isPayment: true, hasError: true};
    case paymentTypes.CLEAR_PAYMENT_STEPS:
      return { ...state,isDone: false, isPayment: false, hasError: false};
    default:
      return state;
  }
}