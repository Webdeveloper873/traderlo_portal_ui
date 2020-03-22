import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import * as payment from 'appRedux/actions/payment';
import { user } from 'appRedux/actions/home';

//constants
import { paymentTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* verifyCard({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/stripe/addCard`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      yield put(payment.verifyCardSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
    yield put(payment.verifyCardFailed(err));
  }
}


function* addAccount({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/stripe/addAccount`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      yield put(payment.addAccountSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
    yield put(payment.addAccountFailed(err));
  }
}

function* charge({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/stripe/charge`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      yield put(payment.chargeSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
    yield put(payment.chargeFailed(err));
  }
}


export function* verifyCardWatcher() {
  yield takeEvery(paymentTypes.VERIFY_CARD, verifyCard);
}

export function* addAccountWatcher() {
  yield takeEvery(paymentTypes.ADD_ACCOUNT, addAccount);
}

export function* chargeWatcher() {
  yield takeEvery(paymentTypes.CHARGE, charge);
}

export default function* rootSaga() {
  yield all([
    fork(verifyCardWatcher),
    fork(addAccountWatcher),
    fork(chargeWatcher),
  ]);
}