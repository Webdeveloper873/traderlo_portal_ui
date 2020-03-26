import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { user } from 'appRedux/actions/user';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers, noAuthHeaders } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';

function* login({payload}) {
  try {
    let resp = yield call(() => request.post(`${base_url}/user/login`, {
       headers: noAuthHeaders,
       body: JSON.stringify(payload),
    }));

    if (resp) {
      yield put(user.successLogin(resp));
    }
  } catch (err) {
    yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* getUserProfile() {
  try{
    const resp = yield call(() => request.get(`${base_url}/user/profile`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));
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
    const resp = yield call(() => request.post(`${base_url}/user/register`,
      {
        headers: noAuthHeaders,
        body: JSON.stringify(profile),
      }));
    // const resp = true;
    if(true){
      yield put(user.registerUserSuccess(resp));
    }
  }catch(err) {
    yield put(user.registerUserFailed());
    console.log('err: ', err);
  }
}

function* logout({payload}) {
  try{
    const resp = yield call(() => request.delete(`${base_url}/user/logout`, {
      headers: { ...headers,
        authorization: `Bearer ${getAccessToken()}`
      }
    }));
    if(resp){
      yield put(user.successLogout());
    }
  }catch(err) {
    //still logout and remove cookie
    yield put(user.successLogout());
  }
}

function* getSavedAccounts() {
  try {
    const resp = yield call(() => request.get(`${base_url}/stripe/getSavedAccounts`, { headers }));
    if (resp) {
      yield put(user.getSavedBanksSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

function* getSavedCards() {
  try {
    const resp = yield call(() => request.get(`${base_url}/stripe/getSavedCards`, { headers }));
    if (resp) {
      yield put(user.getSavedCardSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getSavedCardsWatcher() {
  yield takeEvery(userActTypes.GET_SAVED_CARDS, getSavedCards);
}

export function* getSavedAccountsWatcher() {
  yield takeEvery(userActTypes.GET_SAVED_BANKS, getSavedAccounts);
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
    fork(getSavedAccountsWatcher),
    fork(getSavedCardsWatcher)
  ]);
}