import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  myBids: [],
  myOrders: [],
  auction: [],
  favorites: [],
  sellers: [
    {
      "id": 0,
      "location": "string",
      "seller": 0,
      "sellerCreatedDate": "2020-03-30T12:03:07.338Z",
      "sellerName": "string",
      "sellerProfile": "string"
    }
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case userActTypes.GET_USER_BIDS_SUCCESS:
      return { ...state, myBids: payload };
    case userActTypes.GET_USER_ORDER_SUCCESS:
      return { ...state, myOrders: payload };
    case userActTypes.GET_WATCHLIST_DOMAIN_WEBSITE_SUCCESS:
      return { ...state, auction: payload };
    case userActTypes.GET_WATCHLIST_FAVORITES_SUCCESS:
      return { ...state, favorites: payload };
    case userActTypes.GET_WATCHLIST_SELLERS_SUCCESS:
      return {
        ...state, sellers: [
          {
            "id": 0,
            "location": "string",
            "seller": 0,
            "sellerCreatedDate": "2020-03-30T12:03:07.338Z",
            "sellerName": "string",
            "sellerProfile": "string"
          }
        ] };
    default:
      return state;
  }
}