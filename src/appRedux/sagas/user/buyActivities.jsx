import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { buyActivities } from 'appRedux/actions/user';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';

function* getUserBids() {
  console.log('saga getUserBids');
  try {
    let resp = yield call(() => request.get(`${base_url}/bid/buying`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

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
    let resp = yield call(() => request.get(`${base_url}/orders`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getUserOrder resp ', resp);
    if (resp) {
      yield put(buyActivities.getUserOrdersSuccess(resp));
    }
  } catch (err) {
    // yield put(buyActivities.failedLogin());
    console.log('err: ', err);
  }
}

function* getWatchlistAuction({ payload }) {
  try {
    const resp = yield call(() => request.get(`${base_url}/watchlist/auction`,
      {
        headers: { ...headers, authorization: `Bearer ${getAccessToken()}`, }
      }
    ));
    console.log('success DOMAIN WEBSITE ', resp);
    if (resp) {
      yield put(buyActivities.getWatchlistAuctionSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* getWatchlistClassified({ payload }) {
  try {
    const resp = yield call(() => request.get(`${base_url}/watchlist/classified`,
      {
        headers: { ...headers, authorization: `Bearer ${getAccessToken()}`,
      }
    }));
    console.log('success FAVORITES ', resp);
    if (resp) {
      yield put(buyActivities.getWatchlistClassifiedSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}


function* getWatchlistSellers({ payload }) {
  try {
    const resp = yield call(() => request.get(`${base_url}/watchlist/sellers`,
      {
        headers: { ...headers, authorization: `Bearer ${getAccessToken()}`, }
      }
    ));
    if (resp) {
      console.log('success SELLERS ', resp)
      yield put(buyActivities.getWatchlistSellersSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}



export function* getWatchlistDomainWebsiteWatcher() {
  yield takeEvery(userActTypes.GET_WATCHLIST_DOMAIN_WEBSITE, getWatchlistAuction);
}

export function* getWatchlistFavoritesWatcher() {
  yield takeEvery(userActTypes.GET_WATCHLIST_FAVORITES, getWatchlistClassified);
}

export function* getWatchlistSellersWatcher() {
  yield takeEvery(userActTypes.GET_WATCHLIST_SELLERS, getWatchlistSellers);
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
    fork(getWatchlistDomainWebsiteWatcher),
    fork(getWatchlistFavoritesWatcher),
    fork(getWatchlistSellersWatcher),
  ]);
}