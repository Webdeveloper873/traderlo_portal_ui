import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { userSidebar } from 'appRedux/actions/userSidebar';

//constants
import { userSidebarInfoTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData, getAccessToken } from 'common/utils/helpers';

function* getWatchlistDomainWebsite({payload}) {
    try {
        const userId = 1;
      const resp = yield call(() => request.get(`${base_url}/watchlist/domainWebsites?pageSize=25`,
      {
        headers: { ...headers,
          uid: userId.toString(),
          authorization: `Bearer ${getAccessToken()}`,
        }
      }));
      if(resp){
        // yield put(domain.sellDomainSuccess(resp));
        console.log('success DOMAIN WEBSITE ')
      }
    } catch (err) {
      console.log('err: ', err);
    }
}

function* getWatchlistFavorites({payload}) {
  try {
      const userId = 1;
    const resp = yield call(() => request.get(`${base_url}/watchlist/favourites?pageSize=25`,
    {
      headers: { ...headers,
        uid: userId.toString(),
        authorization: `Bearer ${getAccessToken()}`,
      }
    }));
    if(resp){
      // yield put(domain.sellDomainSuccess(resp));
      console.log('success FAVORITES ')
    }
  } catch (err) {
    console.log('err: ', err);
  }
}


function* getWatchlistSellers({payload}) {
  try {
      const userId = 1;
    const resp = yield call(() => request.get(`${base_url}/watchlist/sellers?pageSize=25`,
    {
      headers: { ...headers,
        uid: userId.toString(),
        authorization: `Bearer ${getAccessToken()}`,
      }
    }));
    if(resp){
      // yield put(domain.sellDomainSuccess(resp));
      console.log('success SELLERS ')
    }
  } catch (err) {
    console.log('err: ', err);
  }
}



export function* getWatchlistDomainWebsiteWatcher() {
    yield takeEvery(userSidebarInfoTypes.GET_WATCHLIST_DOMAIN_WEBSITE, getWatchlistDomainWebsite);
}

export function* getWatchlistFavoritesWatcher() {
  yield takeEvery(userSidebarInfoTypes.GET_WATCHLIST_FAVORITES, getWatchlistFavorites);
}

export function* getWatchlistSellersWatcher() {
  yield takeEvery(userSidebarInfoTypes.GET_WATCHLIST_SELLERS, getWatchlistSellers);
}

  export default function* rootSaga() {
    yield all([
      fork(getWatchlistDomainWebsiteWatcher),
      fork(getWatchlistFavoritesWatcher),
      fork(getWatchlistSellersWatcher),
    ]);
  }