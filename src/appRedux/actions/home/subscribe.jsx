import { homeActions } from 'appRedux/constants/ActionTypes';

export const subscribeToNewsletter = (email) => ({
  type: homeActions.SUBSCRIBE_NEWSLETTER,
  payload: {
    subscriber: {
      email: email,
      id: 0,
    }
  },
});

export const successSubscribeNewsletter = () => ({
  type: homeActions.SUBSCRIBE_NEWSLETTER_SUCCESS
});

export const failedSubscribeNewsletter = () => ({
  type: homeActions.SUBSCRIBE_NEWSLETTER_FAILED
});

export const resetSubscribeResult = () => ({
  type: homeActions.SUBSCRIBE_RESET_RESULT
})