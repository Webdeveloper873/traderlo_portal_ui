import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { chat } from 'appRedux/actions/user';

//constants
import { userActTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, getAccessToken } from 'common/utils/helpers';

function* getChatUsers() {
  console.log('saga getChatUsers');
  try {
    let resp = yield call(() => request.get(`${base_url}/messages`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getChatUsers resp ', resp);
    if (resp) {
      yield put(chat.getChatUsersSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* getChatMsg({id}) {
  console.log('saga getChatMsg');
  try {
    let resp = yield call(() => request.get(`${base_url}/messages/user/${id}`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getChatMsg resp ', resp);
    if (resp) {
      yield put(chat.getChatMsgSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

export function* getChatMsgWatcher() {
  yield takeEvery(userActTypes.GET_CHAT_MSG, getChatMsg);
}

export function* getChatUsersWatcher() {
  yield takeEvery(userActTypes.GET_CHAT_USERS, getChatUsers);
}


export default function* rootSaga() {
  yield all([
    fork(getChatUsersWatcher),
    fork(getChatMsgWatcher),
  ]);
}