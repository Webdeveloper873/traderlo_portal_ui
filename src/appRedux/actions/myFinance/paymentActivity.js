import { myFinance } from "appRedux/constants/ActionTypes";

export const getPaymentActivities = id => ({
  type: myFinance.GET_PAYMENT_ACITIVITY,
  id
});

export const getPaymentActivitiesSuccess = payload => ({
  type: myFinance.GET_PAYMENT_ACTIVITY_SUCCESS,
  payload
});

export const getBalanceHistory = id => ({
  type: myFinance.GET_BALANCE_HISTORY,
  id
});

export const getBalanceHistorySuccess = payload => ({
  type: myFinance.GET_BALANCE_HISTORY_SUCCESS,
  payload
});
