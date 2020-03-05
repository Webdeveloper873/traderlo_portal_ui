//constants
import { homeActions } from 'appRedux/constants/ActionTypes';


export const subscribeToNewsletter = (email) => ({
  type: homeActions.SUBSCRIBE_NEWSLETTER,
  payload: {
    subscriber: {
      email: email,
      id: 0,
    }
  },
})

export const getFeaturedBlogs = () => ({
  type: homeActions.FETCH_FEATBLOGS
})