//constants
import * as actionTypes from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

// export const subscribeToNewsletter = (email) => {
//   const resp = request(
//     `${base_url}/subscribe`,
//     { method: 'POST', headers, email: 'sample@gmail.com'}
//   );

//   console.log('subscribeToNewsletter resp:', resp);
//   return {
//     type: actionTypes.SUBSCRIBE_NEWSLETTER
//   }
// }

export const subscribeToNewsletter = (email) => {
  console.log('dispatch action subscribeToNewsletter');
  return ({
  type: actionTypes.SUBSCRIBE_NEWSLETTER,
  payload: { email },
})}