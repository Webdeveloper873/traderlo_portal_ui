import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  bidPerf: [],
  sellOrders: [],
  listingStatus: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  const { id } = payload || {};
  switch (type) {
    case userActTypes.GET_SELLING_BIDS_SUCCESS:
      return { ...state, bidPerf: payload };
    case userActTypes.GET_SELLING_ORDERS_SUCCESS:
      return { ...state, sellOrders: payload };
    case userActTypes.GET_LISTING_STATUS_SUCCESS:
      return { ...state, listingStatus: payload };
    case userActTypes.DELETE_SELL_LISTING_SUCCESS:
      const { listingStatus } = state || {};
      //removed element with same id
      const updatedlist = listingStatus.filter(item => {
        return item.id !== id;
      });
      return { ...state, listingStatus: updatedlist };
    default:
      return state;
  }
}