import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { user } from 'appRedux/actions/home';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers, login_url, loginHeaders, noAuthHeaders } from 'appRedux/constants/configs';

//utils
import { request, objToFormData, getAccessToken } from 'common/utils/helpers';

const newHeaders = { ...headers, authorization: `Bearer ${getAccessToken()}` };

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


function* registerUser({payload}) {
  try{
    const {profile} = payload || {};
    const { userName, password, email } = profile || {};
    const resp = yield call(() => request.post(`${base_url}/user/register`,
      {
        headers: noAuthHeaders,
        body: JSON.stringify(profile),
      }));
    if(resp){
      yield put(user.registerUserSuccess(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}

function* logout({payload}) {
  try{
    console.log('logout payload', payload);
    const resp = yield call(() => request.delete(`${base_url}/user/logout`, {
      headers: { ...headers,
        authorization: `Bearer ${getAccessToken()}`
      }
    }));
    if(resp){
      yield put(user.successLogout());
    }
  }catch(err) {
    console.log('err: ', err);
  }
}

export function* registerUserWatcher() {
  yield takeEvery(userActTypes.REGISTER_USER, registerUser);
}

export function* getProfileWatcher() {
  yield takeEvery(userActTypes.FETCH_PROFILE, getUserProfile);
}

export function* loginWatcher() {
  yield takeEvery(userActTypes.LOGIN, login);
}

export function* logOutWatcher() {
  yield takeEvery(userActTypes.LOGOUT, logout);
}


export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(getProfileWatcher),
    fork(registerUserWatcher),
    fork(logOutWatcher),
  ]);
}