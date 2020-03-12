import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { successSubscribeNewsletter, failedSubscribeNewsletter } from 'appRedux/actions/home/subscribe';

//constants
import { homeActions } from 'appRedux/constants/ActionTypes';
import { base_url, noAuthHeaders } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* subscribeNewsletter({ payload }) {
  const { subscriber } = payload || {};
  try {
    let resp = yield call(() =>
      request.post(`${base_url}/subscribe`, { noAuthHeaders, body: JSON.stringify({ ...subscriber }) })
    );
    if (resp) {
      console.log('resp', resp);
      yield put(successSubscribeNewsletter());
    }
  } catch (err) {
    yield put(failedSubscribeNewsletter());
  }
}

export function* subscribeNewsWatcher() {
  yield takeEvery(homeActions.SUBSCRIBE_NEWSLETTER, subscribeNewsletter);
}

export default function* rootSaga() {
  yield all([
    fork(subscribeNewsWatcher),
  ]);
}