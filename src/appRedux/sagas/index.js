import { all } from 'redux-saga/effects';

// NOTE: import all sagas
import home from './Home';

export default function* rootSaga() {
  yield all([
    home(),
  ]);
}
