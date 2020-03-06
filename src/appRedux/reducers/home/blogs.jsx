import { homeActions } from 'appRedux/constants/ActionTypes';

const intialState = {
  featBlogs: [],
};

export default (state = intialState, action) => {
  const {type, payload} = action || {};
  const {featBlogs} = payload || {};
  switch (type) {
    case homeActions.FETCH_FEATBLOGS_SUCCESS:
      return { ...state, featBlogs };
    default:
      return state;
  }
}