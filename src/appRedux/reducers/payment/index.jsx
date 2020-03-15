import { paymentTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  isDone: false,
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case paymentTypes.VERIFY_CARD_SUCCESS:
      return { ...state, isDone: true };
    default:
      return state;
  }
}