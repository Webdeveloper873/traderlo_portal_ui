import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  myBids: []
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case userActTypes.GET_USER_BIDS_SUCCESS:
      const { bids } = payload || {};
      return { ...state, myBids: bids };
    default:
      return state;
  }
}