import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//constants
import { homeActions } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* subscribeNewsletter({payload}) {
  console.log('here in subscribeNewsletter option: ', payload);
  const {subscriber} = payload || {};
  try {
    let resp = yield call(() =>
      request.post(`${base_url}/subscribe`, { headers, body: JSON.stringify({subscriber}) })
    );
  }catch(err){
    console.log('err: ', err);
  }
}

function* fetchFeatBlogs(){
  console.log('fetchfeatblogs');
  try{
    let resp = yield call(()=> request.get(`${base_url}/blog/featured`, { headers, uid: 1 }));
    console.log('fetchFeatBlogs resp: ', resp);
  }catch(err){
    console.log('err: ', err);
  }
}

export function* subscribeNewsWatcher() {
  yield takeEvery(homeActions.SUBSCRIBE_NEWSLETTER, subscribeNewsletter);
}

export function* fetchFeatBlogsWatcher(){
  yield takeEvery(homeActions.FETCH_FEATBLOGS, fetchFeatBlogs);
}

export default function* rootSaga() {
  yield all([
    fork(subscribeNewsWatcher),
    fork(fetchFeatBlogsWatcher),
  ]);
}