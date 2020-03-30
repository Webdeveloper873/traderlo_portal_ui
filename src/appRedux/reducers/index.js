import { combineReducers } from "redux";

import * as home from "./home";
import * as sell from "./sell";
import * as buy from "./buy";
import bidding from "./bidding";
import payment from "./payment";
import * as user from "./user";
import * as myFinance from "./myFinance";

export default combineReducers({
  ...home,
  ...sell,
  ...buy,
  bidding,
  payment,
  ...user,
  ...myFinance
});
