import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { domain } from 'appRedux/actions/selling';

//constants
import { sellDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* sellDomain({payload}) {
  try {
    const resp = yield call(() => request.post(`${base_url}/selling/domain`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('sellDomain resp: ', resp)
    if(resp){
      yield put(domain.sellDomainSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* pitchDomain({ payload }) {
  try {
    console.log('payload: ', payload);
    const resp = yield call(() => request.post(`${base_url}/selling/domain/pitch`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('pitchDomain resp: ', resp)
    if (resp) {
      yield put(domain.setPitchSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* domainSale({ payload }) {
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
    console.log('domainSale resp: ', resp);
    if(resp){
      yield put(domain.setSaleSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* domainTraffic({ payload }) {
  console.log('domainTraffic payload: ', payload);
  try {
    let resp = yield call(() => request.post(`${base_url}/selling/domain/traffic`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('domainTraffic resp: ', resp);
    if (resp) {
      yield put(domain.setTrafficSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* domainTrafficWatcher() {
  yield takeEvery(sellDomainTypes.TRAFFIC, domainTraffic);
}

export function* domainSaleWatcher() {
  yield takeEvery(sellDomainTypes.SALE, domainSale);
}

export function* pitchDomainWatcher() {
  yield takeEvery(sellDomainTypes.PITCH, pitchDomain);
}

export function* sellDomainWatcher() {
  yield takeEvery(sellDomainTypes.SELL_DOMAIN, sellDomain);
}

export default function* rootSaga() {
  yield all([
    fork(sellDomainWatcher),
    fork(pitchDomainWatcher),
    fork(domainSaleWatcher),
    fork(domainTrafficWatcher),
  ]);
}