import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { sellingActivities } from 'appRedux/actions/user';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';

function* getBidsPerf() {
  console.log('saga getBidsPerf');
  try {
    let resp = yield call(() => request.get(`${base_url}/bid/selling`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getBidsPerf resp ', resp);
    if (resp) {
      yield put(sellingActivities.getBidsPerfSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* getCstmrOrders() {
  console.log('saga getCstmrOrders');
  try {
    let resp = yield call(() => request.get(`${base_url}/orders/customer`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getCstmrOrders resp ', resp);
    if (resp) {
      yield put(sellingActivities.getCstmrOrderSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

export function* getBidsPerfWatcher() {
  yield takeEvery(userActTypes.GET_SELLING_BIDS, getBidsPerf);
}

export function* getCstmrOrdersWatcher() {
  yield takeEvery(userActTypes.GET_SELLING_ORDERS, getCstmrOrders);
}

export default function* rootSaga() {
  yield all([
    fork(getBidsPerfWatcher),
    fork(getCstmrOrdersWatcher),
  ]);
}