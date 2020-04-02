import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  bidPerf: [],
  sellOrders: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case userActTypes.GET_SELLING_BIDS_SUCCESS:
      return { ...state, bidPerf: payload };
    case userActTypes.GET_SELLING_ORDERS_SUCCESS:
      return { ...state, sellOrders: payload };
    default:
      return state;
  }
}