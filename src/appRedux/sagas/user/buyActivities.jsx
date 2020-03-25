import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { buyActivities } from 'appRedux/actions/user';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers, noAuthHeaders } from 'appRedux/constants/configs';

//utils
import { request, objToFormData, getAccessToken } from 'common/utils/helpers';

function* getUserBids() {
  console.log('saga getUserBids');
  try {
    let resp = yield call(() => request.get(`${base_url}/bid/buying?pageSize=25`, {
      headers: {
        Accept: 'application/json',
        uid: '1',
        authorization: `Bearer ${window.localStorage.getItem('access_token')}`
      }
    }));

    console.log('getUserBids resp ', resp);
    if (resp) {
      yield put(buyActivities.getUserBidsSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* getUserOrder() {
  console.log('saga getUserOrder');
  try {
    let resp = yield call(() => request.get(`${base_url}/bid/buying?search=a&pageNum=1&pageSize=25`, {
      headers
    }));

    console.log('getUserOrder resp ', resp);
    if (resp) {
      // yield put(user.successLogin(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

export function* getUserOrderWatcher() {
  yield takeEvery(userActTypes.GET_USER_ORDER, getUserOrder);
}


export function* getUserBidsWatcher() {
  yield takeEvery(userActTypes.GET_USER_BIDS, getUserBids);
}


export default function* rootSaga() {
  yield all([
    fork(getUserBidsWatcher),
    fork(getUserOrderWatcher),
  ]);
}