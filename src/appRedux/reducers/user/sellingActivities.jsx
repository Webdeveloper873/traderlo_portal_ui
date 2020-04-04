import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  bidPerf: [],
  sellOrders: [],
  listingStatus: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case userActTypes.GET_SELLING_BIDS_SUCCESS:
      return { ...state, bidPerf: payload };
    case userActTypes.GET_SELLING_ORDERS_SUCCESS:
      return { ...state, sellOrders: payload };
    case userActTypes.GET_LISTING_STATUS_SUCCESS:
      return { ...state, listingStatus: payload };
    default:
      return state;
  }
}