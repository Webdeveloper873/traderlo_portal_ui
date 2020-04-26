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
    let resp = yield call(() => request.get(`${base_url}/messages/user`, { headers: { ...headers, authorization: `Bearer ${getAccessToken()}` } }));

    console.log('getChatUsers resp ', resp);
    if (resp) {
      yield put(chat.getChatUsersSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* getChatMsg({ payload }) {
  const { id } = payload || {};
  console.log('saga getChatMsg', payload);
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

function* sendChat({ payload }) {
  try {
    let resp = yield call(() => request.post(`${base_url}/messages`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('sendChat resp ', resp);
    if (resp) {
      yield put(chat.sendChatSuccess(resp));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* deleteChat({ payload }) {
  try {
    const { id } = payload || {};
    const resp = yield call(() => request.delete(`${base_url}/messages/user/${id}`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify(payload)
      }
    ));
    console.log('deleteChat resp ', resp);
    if (resp) {
      yield put(chat.deleteChatSuccess(id));
    }
  } catch (err) {
    // yield put(user.failedLogin());
    console.log('err: ', err);
  }
}

function* getOnlineStatus({ payload }) {
  try {
    const { id } = payload || {};
    const resp = yield call(() => request.get(`${base_url}/user?userId=${id}`,
      {
        headers: {
          ...headers,
          'content-type': 'application/json',
          authorization: `Bearer ${getAccessToken()}`
        },
      }
    ));
    console.log('getOnlineStatus resp ', resp);
    if (resp) {
      yield put(chat.getOnlineStatusSuccess(resp));
    }
  } catch (err) {
    yield put(chat.getOnlineStatusFailed());
    console.log('err: ', err);
  }
}

export function* getOnlineStatusWatcher() {
  yield takeEvery(userActTypes.GET_ONLINE_STATUS, getOnlineStatus);
}

export function* deleteChatWatcher() {
  yield takeEvery(userActTypes.DELETE_CHAT, deleteChat);
}


export function* sendChatWatcher() {
  yield takeEvery(userActTypes.SEND_CHAT, sendChat);
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
    fork(sendChatWatcher),
    fork(deleteChatWatcher),
    fork(getOnlineStatusWatcher),
  ]);
}