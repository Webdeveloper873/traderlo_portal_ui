import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { domain } from 'appRedux/actions/selling';

//constants
import { bidDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* setBidDomain({ payload }) {
  try {
    const id='1'; //TODO: replace
    const resp = yield call(() => request.post(`${base_url}/listing/${id}/bid`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('setBidDomain resp: ', resp)
    if (resp) {
      yield put(domain.setBidSuccess(resp));
    }
  } catch (err) {
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