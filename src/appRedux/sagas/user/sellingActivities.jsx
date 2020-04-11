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

function* getListingStatus() {
  console.log('saga getListingStatus');
  try {
    let resp = yield call(() => request.get(`${base_url}/listing/user`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getListingStatus resp ', resp);
    if (resp) {
      yield put(sellingActivities.getListingStatusSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* deleteSellListing({ payload }) {
  const { id, isBidPerf } = payload || {};
  console.log('deleteSellListing payload', payload)
  try {
    // let resp = yield call(() => request.delete(`${base_url}/listing/${id}`,
    //   {
    //     headers: {
    //       ...headers,
    //       authorization: `Bearer ${getAccessToken()}`
    //     }
    //   }
    // ));
    let resp = true;
    if (resp) {
      console.log('deleteSellListing resp', resp);
      if(isBidPerf){
        yield put(sellingActivities.deleteSellListingBidsSuccess({ id }));
      }else {
        yield put(sellingActivities.deleteSellListingSuccess({ id }));
      }
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* deleteSellListingWatcher() {
  yield takeEvery(userActTypes.DELETE_SELL_LISTING, deleteSellListing);
}


export function* getBidsPerfWatcher() {
  yield takeEvery(userActTypes.GET_SELLING_BIDS, getBidsPerf);
}

export function* getListingStatusWatcher() {
  yield takeEvery(userActTypes.GET_LISTING_STATUS, getListingStatus);
}

export function* getCstmrOrdersWatcher() {
  yield takeEvery(userActTypes.GET_SELLING_ORDERS, getCstmrOrders);
}

export default function* rootSaga() {
  yield all([
    fork(getBidsPerfWatcher),
    fork(getCstmrOrdersWatcher),
    fork(getListingStatusWatcher),
    fork(deleteSellListingWatcher),
  ]);
}