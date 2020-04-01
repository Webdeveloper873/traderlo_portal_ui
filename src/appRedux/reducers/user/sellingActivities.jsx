import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  bidPerf: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case userActTypes.GET_SELLING_BIDS_SUCCESS:
      return { ...state, bidPerf: payload };
    default:
      return state;
  }
}