import { combineReducers } from 'redux';

import * as home from './home';
import * as sell from './sell';

export default combineReducers({
  ...home,
  ...sell,
});