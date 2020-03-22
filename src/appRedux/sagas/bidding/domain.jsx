import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { bidDomain } from 'appRedux/actions/bidding';

//constants
import { bidDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* setBidDomain({ payload }) {
  try {
    const { id, ...others } = payload || {};
    const resp = yield call(() => request.post(`${base_url}/listing/${id}/bid`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(others)
      }
    ));
    console.log('setBidDomain resp: ', resp);
    if (resp) {
      yield put(bidDomain.setBidSuccess(payload));
    }
  } catch (err) {
    yield put(bidDomain.setBidFailed());
    console.log('err: ', err);
  }
}

export function* setBidDomainWatcher() {
  yield takeEvery(bidDomainTypes.SET_BID, setBidDomain);
}

export default function* rootSaga() {
  yield all([
    fork(setBidDomainWatcher),
  ]);
}