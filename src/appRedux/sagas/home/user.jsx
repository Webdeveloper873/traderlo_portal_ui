import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { user } from 'appRedux/actions/home';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers, login_url, loginHeaders } from 'appRedux/constants/configs';

//utils
import { request, objToFormData } from 'common/utils/helpers';

function* login({payload}) {
  try {
    let resp = yield call(() => request.post(`${login_url}/oauth/token`, {
      headers: loginHeaders,
      body: objToFormData(payload),
    }));

    if (resp) {
      yield put(user.successLogin(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* getUserProfile({payload}) {
  try{
    const {id} = payload || {};
    const resp = yield call(() => request.get(`${base_url}/user/${id}/profile`, { headers }));
    console.log('getUserProfile', resp);
    if(resp){
      yield put(user.getProfileSuccess(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}

export function* getProfileWatcher() {
  yield takeEvery(userActTypes.FETCH_PROFILE, getUserProfile);
}

export function* loginWatcher() {
  yield takeEvery(userActTypes.LOGIN, login);
}

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(getProfileWatcher),
  ]);
}