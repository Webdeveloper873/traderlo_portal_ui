import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//constants
import * as actionTypes from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* subscribeNewsletter() {
  console.log('here in subscribeNewsletter');
  try {
    let resp = yield call(() => request(
      `${base_url}/subscribe`,
      {
        method: 'POST', headers,
        email: 'sample@gmail.com'
      }
    ));
  }catch(err){
    console.log('err: ', err);
  }

}

export function* subscribeNewsWatcher() {
  yield takeEvery(actionTypes.SUBSCRIBE_NEWSLETTER, subscribeNewsletter);
}

export default function* rootSaga() {
  yield all([
    fork(subscribeNewsWatcher),
  ]);
}