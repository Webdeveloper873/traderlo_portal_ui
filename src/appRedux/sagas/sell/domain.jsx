import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//constants
import { sellDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* sellDomain() {
  console.log('sell domain');
  try {
    const tempData = {
      "ipAddress": "1.1.1.1",
      "url": "test.com"
    };
    let resp = yield call(() => request.post(`${base_url}/selling/domain`, { headers, body: JSON.stringify(tempData)}));
    console.log('sellDomain resp: ', resp)
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* sellDomainWatcher() {
  yield takeEvery(sellDomainTypes.SELL_DOMAIN, sellDomain);
}

export default function* rootSaga() {
  yield all([
    fork(sellDomainWatcher),
  ]);
}