import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { user } from 'appRedux/actions/home';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers, login_url, loginHeaders, testeHeaders, sampleBody } from 'appRedux/constants/configs';

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

export function* registerUser({payload}) {
  try{
    const {id} = payload || {};
    console.log(payload.profile,'payload profile')

    const resp = yield call(() => request.post(`${base_url}/user/register`,
      { 
        headers: testeHeaders, 
        body: payload.profile , 
        // body: JSON.stringify(payload.profile), 
      }));
    console.log('getUserProfile', resp);
    if(resp){
      console.log(resp,'resp');
    } else {
      console.log('failed fetch')
    }
  }catch(err) {
    console.log('err: ', err);
  }
}

export function* registerUserWatcher() {
  yield takeEvery(userActTypes.REGISTER_USER, registerUser);
}


export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(getProfileWatcher),
    fork(registerUserWatcher),
  ]);
}