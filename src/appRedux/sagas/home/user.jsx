import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { saveFeatBlogs } from 'appRedux/actions/home/blogs';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { login_url, headers } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* login({payload}) {
  console.log('login payload:', payload);
  try {
    const body = JSON.stringify({ ...payload });
    let resp = yield call(() => request.post(`${login_url}/oauth/token`, { headers, uid: 1, body }));
    console.log('resp: ', resp);
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* loginWatcher() {
  yield takeEvery(userActTypes.LOGIN, login);
}

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
  ]);
}