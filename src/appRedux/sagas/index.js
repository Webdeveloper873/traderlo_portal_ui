import { all } from 'redux-saga/effects';

// NOTE: import all sagas
import { subscribeNews, blogs, user } from './home/index';
import { domain } from './sell';

export default function* rootSaga() {
  yield all([
    subscribeNews(),
    blogs(),
    user(),
    domain(),
  ]);
}
