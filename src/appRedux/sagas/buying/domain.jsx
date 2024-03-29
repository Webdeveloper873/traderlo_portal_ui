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
    const resp = yield call(() => request.get(`${base_url}/listing/domains${payload ? `?${payload}`: ''}`,
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
    const { id } = payload || {};
    const token = getAccessToken();
    let headerFields = {
      ...headers,
    };

    if(token) {
      headerFields = {
        ...headerFields,
        authorization: `Bearer ${token}`
      }
    }
    console.log('headerFields', headerFields);

    const resp = yield call(() => request.get(`${base_url}/listing/domains/${id}`,
      {
        headers: headerFields
      }
    ));

    if(resp){
      yield put(buyingDomain.storeSelectedDomain(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}


function* addToWatchlist({payload}) {
  // Categor:
  //   l("LISTING"),
  //   s("SELLER"),
  //   c("CATEGORY"),
  //   n("NICHE"),
  //   p("PLATFORM"),
  //   m("MONETIZE");

  try{
    const { id, listType } = payload || {};
    const type = listType || 'l' // if not specified automatic l
    const resp = yield call(() => request.post(`${base_url}/watchlist/${type}/${id}`,
    {
      headers: { ...headers,
        uid: 1,
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
    const { id } = payload || {};
    const type = 'l' // temporarily
    const resp = yield call(() => request.delete(`${base_url}/watchlist/${type}/${id}`,
    {
      headers: { ...headers,
        uid: 1,
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