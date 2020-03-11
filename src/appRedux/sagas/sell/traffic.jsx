import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//constants
import { sellDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* domainTraffic({ payload }) {
  console.log('domainSale payload: ', payload);
  try {
    let resp = yield call(() => request.post(`${base_url}/selling/domain/sale`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('domainSale resp: ', resp)
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* domainTrafficWatcher() {
  yield takeEvery(sellDomainTypes.TRAFFIC, domainTraffic);
}

export default function* rootSaga() {
  yield all([
    fork(domainTrafficWatcher),
  ]);
}