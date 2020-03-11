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


function* registerUser({payload}) {
  try{
    const {profile} = payload || {};
    const { userName, password, email } = profile || {};
    console.log(payload.profile,'payload profile');
    const tempData = {
      "aboutMe": "string",
      "address": "string",
      "associatedAccount": "string",
      "birthDate": "2020-03-10T11:34:10.834Z",
      "buyerCertificate": "y",
      "cardName": 0,
      "contactNo": "string",
      "createdDate": "2020-03-10T11:34:10.834Z",
      "description": "string",
      "email": email,
      "emailVerificationStatus": "y",
      "facebookUserProfile": "string",
      "facebookVerificationStatus": "y",
      "firstName": "string",
      "gender": "m",
      "homePageUrl": "string",
      "id": 0,
      "identifier": "string",
      "ipAddress": "string",
      "isActive": "y",
      "isDeleted": "y",
      "isFacebookDisplayed": "y",
      "isLinkedInDisplayed": "y",
      "isPaypalVerified": "y",
      "isSubscribed": "y",
      "isTwitterDisplayed": "y",
      "lastLoginDate": "2020-03-10T11:34:10.834Z",
      "lastName": "string",
      "linkedInUserProfile": "string",
      "linkedInVerificationStatus": "y",
      "location": "string",
      "password": password,
      "paypalAccount": "string",
      "phoneVerificationStatus": "y",
      "phoneVerifyCode": "string",
      "phoneVerifyTimes": 0,
      "profileImage": "string",
      "publicProfileUrl": "string",
      "status": "a",
      "token": "string",
      "twitterUserProfile": "string",
      "twitterVerificationStatus": "y",
      "userName": userName,
      "walletAmount": 0,
      "webUrl": "string"
    };

    const resp = yield call(() => request.post(`${base_url}/user/register`,
      {
        headers: testeHeaders,
        body: JSON.stringify(profile),
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
    fork(registerUserWatcher),
  ]);
}