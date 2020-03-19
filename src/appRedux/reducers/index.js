import { combineReducers } from 'redux';

import * as home from './home';
import * as sell from './sell';
import * as buy from './buy';
import payment from './payment';

export default combineReducers({
  ...home,
  ...sell,
  ...buy,
  payment,
});