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
    if(resp){
      yield put(domain.sellDomainSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* pitchDomain({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/selling/domain/pitch`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      yield put(domain.setPitchSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* domainSale({ payload }) {
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
    if(resp){
      yield put(domain.setSaleSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* domainTraffic({ payload }) {
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
    // let resp = true;
    if (resp) {
      yield put(domain.setTrafficSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* domainPromote({ payload }) {
  try {
    let resp = yield call(() => request.post(`${base_url}/selling/domain/promote`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      yield put(domain.setPromoteSuccess());
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* verifyByText({ payload }) {
  try {
    let resp = yield call(() => request.post(`${base_url}/domain/verifyDomain`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      yield put(domain.verifyTextFileSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* verifyByMetaTag({ payload }) {
  const { metaTag, ...others } = payload;
  try {
    let resp = yield call(() => request.post(`${base_url}/domain/verifyMeta?metaTag=${metaTag}`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(others)
      }
    ));
    if (resp) {
      yield put(domain.verifyByMetaSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* getRandText() {
  try {
    let resp = yield call(() => request.get(`${base_url}/domain/getText?id=1`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
      }
    ));
    if (resp) {
      yield put(domain.getRandTextSuccess(resp.value));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* getMetaText() {
  try {
    let resp = yield call(() => request.get(`${base_url}/domain/getMetaTag?id=1`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
      }
    ));
    if (resp) {
      yield put(domain.getMetaSuccess(resp.value));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* verifyByMetaTagWatcher() {
  yield takeEvery(sellDomainTypes.VERIFY_META, verifyByMetaTag);
}

export function* getMetaTextWatcher() {
  yield takeEvery(sellDomainTypes.GET_META, getMetaText);
}

export function* getRandTextWatcher() {
  yield takeEvery(sellDomainTypes.GET_TEXT, getRandText);
}

export function* verifyByTextWatcher() {
  yield takeEvery(sellDomainTypes.VERIFY_TEXTFILE, verifyByText);
}

export function* domainPromoteWatcher() {
  yield takeEvery(sellDomainTypes.PROMOTE, domainPromote);
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
    fork(domainPromoteWatcher),
    fork(verifyByTextWatcher),
    fork(getRandTextWatcher),
    fork(getMetaTextWatcher),
    fork(verifyByMetaTagWatcher),
  ]);
}