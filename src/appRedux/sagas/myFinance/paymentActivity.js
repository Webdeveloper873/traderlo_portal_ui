import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { paymentActivity } from "appRedux/actions/myFinance";

//constants
import { myFinance } from "appRedux/constants/ActionTypes";
import { base_url, headers } from "appRedux/constants/configs";

//utils
import { request, getAccessToken } from "common/utils/helpers";

function* getPaymentActivityCall({ id }) {
  try {
    const resp = yield call(() =>
      request.get(`${base_url}/wallet/getPaymentActivityValues/${id}`, {
        headers: { ...headers, authorization: `Bearer ${getAccessToken()}` }
      })
    );

    if (resp) {
      yield put(paymentActivity.getPaymentActivitiesSuccess(resp));
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

function* getBalanceHistoryCall({ id }) {
  try {
    const resp = yield call(() =>
      request.get(`${base_url}/wallet/getBalanceHistory/${id}`, {
        headers: { ...headers, authorization: `Bearer ${getAccessToken()}` }
      })
    );

    if (resp) {
      yield put(paymentActivity.getBalanceHistorySuccess(resp));
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

export function* getPaymentActivityWatcher() {
  yield takeEvery(myFinance.GET_PAYMENT_ACITIVITY, getPaymentActivityCall);
}

export function* getBalanceHistoryWatcher() {
  yield takeEvery(myFinance.GET_BALANCE_HISTORY, getBalanceHistoryCall);
}

export default function* rootSaga() {
  yield all([fork(getPaymentActivityWatcher), fork(getBalanceHistoryWatcher)]);
}
