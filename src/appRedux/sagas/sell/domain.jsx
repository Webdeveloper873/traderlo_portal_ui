import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//constants
import { sellDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* sellDomain({payload}) {
  console.log('sell domain');
  try {
    let resp = yield call(() => request.post(`${base_url}/selling/domain`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
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