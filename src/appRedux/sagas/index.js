import { all } from 'redux-saga/effects';

// NOTE: import all sagas
import { subscribeNews, blogs } from './home/index';

export default function* rootSaga() {
  yield all([
    subscribeNews(),
    blogs(),
  ]);
}
