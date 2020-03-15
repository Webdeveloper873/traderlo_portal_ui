import { combineReducers } from 'redux';

import * as home from './home';
import * as sell from './sell';
import * as buy from './buy';

export default combineReducers({
  ...home,
  ...sell,
  ...buy,
});