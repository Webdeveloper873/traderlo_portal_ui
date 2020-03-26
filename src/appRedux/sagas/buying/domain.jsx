import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { buyingDomain } from 'appRedux/actions/buying';

//constants
import { buyDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';

function* getBuyDomain({payload}) {
  try {
    console.log(payload,'buy domain fetch')
    const resp = yield call(() => request.get(`${base_url}/listing/domains`,
      {
        headers: { ...headers,
          authorization: `Bearer ${getAccessToken()}`
        },
        ...payload
      }
    ));

    if(resp){
      yield put(buyingDomain.getBuyDomainSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}



function* getBuyDomainById({payload}) {
  try{
    const {id, userId} = payload || {};
    const resp = yield call(() => request.get(`${base_url}/listing/domains/${id}`,
    {
      headers: { ...headers,
        uid: userId,
        authorization: `Bearer ${getAccessToken()}`
      }
    }));
    if(resp){
      yield put(buyingDomain.storeSelectedDomain(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}


function* addToWatchlist({payload}) {
  try{
    const {id, userId} = payload || {};
    const type = 'l' // temporarily
    const resp = yield call(() => request.post(`${base_url}/watchlist/${type}/${id}`,
    {
      headers: { ...headers,
        uid: userId.toString(),
        authorization: `Bearer ${getAccessToken()}`,
      }
    }));
    if(resp){
      yield put(buyingDomain.addToWatchlistSuccess(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}

function* removeToWatchlist({payload}) {
  try{
    console.log(payload,'payload watchlist')
    const {id, userId} = payload || {};
    const type = 'l' // temporarily
    const resp = yield call(() => request.delete(`${base_url}/watchlist/${type}/${id}`,
    {
      headers: { ...headers,
        uid: userId.toString(),
        authorization: `Bearer ${getAccessToken()}`,
      }
    }));
    if(resp){
      yield put(buyingDomain.removeToWatchlistSuccess(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}


export function* buyDomainWatcher() {
  yield takeEvery(buyDomainTypes.GET_BUY_DOMAIN, getBuyDomain);
}

export function* buyDomainByIdWatcher() {
  yield takeEvery(buyDomainTypes.GET_BUY_DOMAIN_BY_ID, getBuyDomainById);
}

export function* addToWatchlistWatcher() {
  yield takeEvery(buyDomainTypes.ADD_TO_WATCHLIST, addToWatchlist);
}

export function* removeToWatchlistWatcher() {
  yield takeEvery(buyDomainTypes.REMOVE_TO_WATCHLIST, removeToWatchlist);
}


export default function* rootSaga() {
  yield all([
    fork(buyDomainWatcher),
    fork(buyDomainByIdWatcher),
    fork(addToWatchlistWatcher),
    fork(removeToWatchlistWatcher),
  ]);
}