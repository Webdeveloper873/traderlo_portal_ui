import { myFinance } from "appRedux/constants/ActionTypes";

const initialState = {
  loading: true,
  values: null,
  balanceHistory: null
};

export default (state = initialState, action) => {
  const { type } = action || {};
  switch (type) {
    case myFinance.GET_PAYMENT_ACITIVITY:
      return { ...state, loading: true };
    case myFinance.GET_PAYMENT_ACTIVITY_SUCCESS:
      return { ...state, values: action.payload, loading: false };
    case myFinance.GET_BALANCE_HISTORY:
      return { ...state, loading: true };
    case myFinance.GET_BALANCE_HISTORY_SUCCESS:
      return { ...state, balanceHistory: action.payload, loading: false };
    default:
      return state;
  }
};
