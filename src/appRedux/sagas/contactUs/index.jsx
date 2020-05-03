import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import * as contactAction from 'appRedux/actions/contactUs';

//constants
import { contactUsTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';


function* sendContactUs({ payload }) {
  try {
    const resp = yield call(() => request.post(`${base_url}/home/contact/admin`,
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
      yield put(contactAction.sendContactUsSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
    yield put(contactAction.sendContactUsFailed(err));
  }
}


export function* sendContactUsWatcher() {
  yield takeEvery(contactUsTypes.SEND_CONTACT_US, sendContactUs);
}


export default function* rootSaga() {
  yield all([
    fork(sendContactUsWatcher),
  ]);
}