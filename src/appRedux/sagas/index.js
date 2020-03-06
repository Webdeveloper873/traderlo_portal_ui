import { all } from 'redux-saga/effects';

// NOTE: import all sagas
import { subscribeNews } from './home/index';

export default function* rootSaga() {
  yield all([
    subscribeNews(),
  ]);
}
