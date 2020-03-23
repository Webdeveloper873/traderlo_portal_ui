import { all } from 'redux-saga/effects';

// NOTE: import all sagas
import { subscribeNews, blogs } from './home/index';
import { domain } from './sell';
import { buyingDomain } from './buying';
import { bidDomain } from './bidding';
import payment from './payment';
import {watchlist} from './userSidebar'
import { user } from './user';

export default function* rootSaga() {
  yield all([
    subscribeNews(),
    blogs(),
    user(),
    domain(),
    buyingDomain(),
    bidDomain(),
    payment(),
    watchlist(),
  ]);
}
