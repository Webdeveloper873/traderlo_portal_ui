import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import * as payment from 'appRedux/actions/payment';

//constants
import { paymentTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';



function* verifyCard({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/stripe/addCard`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`,
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


function* deleteCard({ payload }) {
  try {
    console.log(payload,'peload delete card');
    const {id, userId} = payload || {};
    const resp = yield call(() => request.delete(`${base_url}/stripe/deleteCard?cardId=${id}`,
      {
        headers: {
          ...headers,
          uid: userId.toString(),
          authorization: `Bearer ${getAccessToken()}`,
        }
        //body: JSON.stringify(payload)
      }
    ));
    if (resp) {
      console.log('delete card success');
      yield put(payment.deleteCardSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
    //yield put(payment.verifyCardFailed(err));
  }
}



function* addAccount({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/stripe/addAccount`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`,
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


function* deleteAccount({ payload }) {
  try {
    console.log(payload,'peload delete card');
    const {id, userId} = payload || {};
    const resp = yield call(() => request.delete(`${base_url}/stripe/deleteAccount?accountId=${id}`,
      {
        headers: {
          ...headers,
          uid: userId.toString(),
          authorization: `Bearer ${getAccessToken()}`,
        }
      }
    ));
    if (resp) {
      console.log('delete account success');
      yield put(payment.deleteAccountSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
    //yield put(payment.verifyCardFailed(err));
  }
}



function* charge({ payload }) {
  const { domainData, ...others } = payload || {};
  try {
    const resp = yield call(() => request.post(`${base_url}/stripe/charge`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(others)
      }
    ));
    if (resp) {
      yield put(payment.saveCharged(domainData));
    }
  } catch (err) {
    console.log('err: ', err);
    yield put(payment.chargeFailed(err));
  }
}


function* saveCharged({ payload }) {
  const { id, ...others } = payload || {};
  try {
    const resp = yield call(() => request.post(`${base_url}/listing/${id}/order`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify(others)
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


export function* saveChargedWatcher() {
  yield takeEvery(paymentTypes.SAVE_CHARGE, saveCharged);
}


export function* verifyCardWatcher() {
  yield takeEvery(paymentTypes.VERIFY_CARD, verifyCard);
}

export function* deleteCardWatcher() {
  yield takeEvery(paymentTypes.DELETE_CARD, deleteCard);
}

export function* addAccountWatcher() {
  yield takeEvery(paymentTypes.ADD_ACCOUNT, addAccount);
}

export function* deleteAccountWatcher() {
  yield takeEvery(paymentTypes.DELETE_ACCOUNT, deleteAccount);
}

export function* chargeWatcher() {
  yield takeEvery(paymentTypes.CHARGE, charge);
}

export default function* rootSaga() {
  yield all([
    fork(verifyCardWatcher),
    fork(deleteCardWatcher),
    fork(addAccountWatcher),
    fork(deleteAccountWatcher),
    fork(chargeWatcher),
    fork(saveChargedWatcher),
  ]);
}