import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { saveFeatBlogs } from 'appRedux/actions/home/blogs';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { login_url, headers, loginHeaders } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* login({payload}) {
  console.log('login payload:', payload);
  try {
    const { grant_type, scrope, username, password } = payload || {};
    var data = new FormData();
    data.append('grant_type', grant_type);
    data.append('scope', scrope);
    data.append('username', username);
    data.append('password', password);

    let resp = yield call(() => request.post(`${login_url}/oauth/token`, {
      headers: { ...loginHeaders,
        Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk' //TODO: change to valid authorization
      },
      body: data,
    }));
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