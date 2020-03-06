//constants
import { homeActions } from 'appRedux/constants/ActionTypes';

export const getFeaturedBlogs = () => ({
  type: homeActions.FETCH_FEATBLOGS
})

export const saveFeatBlogs = (featBlogs) => ({
  type: homeActions.FETCH_FEATBLOGS_SUCCESS,
  payload: {
    featBlogs
  }
})