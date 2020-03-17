//constants
import { paymentTypes } from 'appRedux/constants/ActionTypes';

export const verifyCard = (payload) => ({
  type: paymentTypes.VERIFY_CARD,
  payload,
});

export const verifyCardSuccess = () => ({
  type: paymentTypes.VERIFY_CARD_SUCCESS,
});

export const addAccount = (payload) => ({
  type: paymentTypes.ADD_ACCOUNT,
  payload,
});

export const addAccountSuccess = () => ({
  type: paymentTypes.ADD_ACCOUNT_SUCCESS,
});