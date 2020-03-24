//constants
import { paymentTypes } from 'appRedux/constants/ActionTypes';

export const verifyCard = (payload) => ({
  type: paymentTypes.VERIFY_CARD,
  payload,
});

export const verifyCardSuccess = () => ({
  type: paymentTypes.VERIFY_CARD_SUCCESS,
});

export const verifyCardFailed = () => ({
  type: paymentTypes.VERIFY_CARD_FAILED,
});

export const deleteCard = (payload) => ({
  type: paymentTypes.DELETE_CARD,
  payload,
})

export const deleteCardSuccess = (payload) => ({
  type: paymentTypes.DELETE_CARD_SUCCESS,
  payload,
})


export const addAccount = (payload) => ({
  type: paymentTypes.ADD_ACCOUNT,
  payload,
});

export const addAccountSuccess = () => ({
  type: paymentTypes.ADD_ACCOUNT_SUCCESS,
});

export const addAccountFailed = () => ({
  type: paymentTypes.ADD_ACCOUNT_FAILED,
});

export const deleteAccountSuccess = (payload) => ({
  type: paymentTypes.DELETE_ACCOUNT_SUCCESS,
  payload,
})

export const charge = (payload) => ({
  type: paymentTypes.CHARGE,
  payload
})

export const chargeSuccess = (payload) => ({
  type: paymentTypes.CHARGE_SUCCESS,
  payload
})

export const chargeFailed = (payload) => ({
  type: paymentTypes.CHARGE_FAILED,
  payload
})

export const clearPaymentSteps = (payload) => ({
  type: paymentTypes.CLEAR_PAYMENT_STEPS,
  payload
})