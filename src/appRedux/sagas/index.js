import { all } from 'redux-saga/effects';

// NOTE: import all sagas
import { subscribeNews, blogs } from './home/index';
import { domain } from './sell';
import { buyingDomain } from './buying';
import { bidDomain } from './bidding';
import payment from './payment';
import { user, buyActivities, sellingActivities } from './user';
import { paymentActivity } from "./myFinance";

export default function* rootSaga() {
  yield all([
    subscribeNews(),
    blogs(),
    user(),
    buyActivities(),
    sellingActivities(),
    domain(),
    buyingDomain(),
    bidDomain(),
    payment(),
    paymentActivity(),
  ]);
}
