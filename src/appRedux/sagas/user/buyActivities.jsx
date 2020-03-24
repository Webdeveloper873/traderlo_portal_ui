import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { user } from 'appRedux/actions/user';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers, noAuthHeaders } from 'appRedux/constants/configs';

//utils
import { request, objToFormData, getAccessToken } from 'common/utils/helpers';

function* getUserBids({ payload }) {
  try {
    let resp = yield call(() => request.post(`${base_url}/user/login`, {
      headers,
      body: JSON.stringify(payload),
    }));

    if (resp) {
      yield put(user.successLogin(resp));
    }
  } catch (err) {
    yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

export function* getUserBidsWatcher() {
  yield takeEvery(userActTypes.GET_USER_BIDS, getUserBids);
}


export default function* rootSaga() {
  yield all([
    fork(getUserBidsWatcher),
  ]);
}