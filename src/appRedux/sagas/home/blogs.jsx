import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { saveFeatBlogs } from 'appRedux/actions/home/blogs';

//constants
import { homeActions } from 'appRedux/constants/ActionTypes';
import { base_url, noAuthHeaders } from 'appRedux/constants/configs';

//utils
import { request } from 'common/utils/helpers';

function* fetchFeatBlogs(){
  try{
    let resp = yield call(()=> request.get(`${base_url}/blog/featured`, { noAuthHeaders, uid: 1 }));
    if(resp){
      yield put(saveFeatBlogs(resp));
    }
  }catch(err){
    console.log('err: ', err);
  }
}

export function* fetchFeatBlogsWatcher(){
  yield takeEvery(homeActions.FETCH_FEATBLOGS, fetchFeatBlogs);
}

export default function* rootSaga() {
  yield all([
    fork(fetchFeatBlogsWatcher),
  ]);
}