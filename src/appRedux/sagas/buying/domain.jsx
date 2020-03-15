import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import { buyingDomain } from 'appRedux/actions/buying';

//constants
import { buyDomainTypes } from 'appRedux/constants/ActionTypes';
import { base_url, headers } from 'appRedux/constants/configs';

//utils
import { request, objToFormData, getAccessToken } from 'common/utils/helpers';

function* getBuyDomain({payload}) {
  try {
    console.log(payload,'buy domain fetch')
    const resp = yield call(() => request.get(`${base_url}/listing/domains`,
      {
        headers: { ...headers,
          authorization: `Bearer ${getAccessToken()}`
        },
        ...payload
      }
    ));
  
    if(resp){
      console.log('buy domain resp', resp)
      yield put(buyingDomain.getBuyDomainSuccess(resp));
    }
  } catch (err) {
    console.log('err: ', err);
  }
}



function* getBuyDomainById({payload}) {
  try{
    console.log(payload,'payload');
    const {id, userId} = payload || {};
    const resp = yield call(() => request.get(`${base_url}/listing/domains/${id}`, 
    {
      headers: { ...headers,
        uid: userId,
        authorization: `Bearer ${getAccessToken()}`
      }
    }));
    console.log('getBuyDomainById', resp);
    if(resp){
      console.log('getBuyDomainByIdSuccess', resp)
      yield put(buyingDomain.storeSelectedDomain(resp));
    }
  }catch(err) {
    console.log('err: ', err);
  }
}






export function* buyDomainWatcher() {
  yield takeEvery(buyDomainTypes.GET_BUY_DOMAIN, getBuyDomain);
}

export function* buyDomainByIdWatcher() {
  yield takeEvery(buyDomainTypes.GET_BUY_DOMAIN_BY_ID, getBuyDomainById);
}


export default function* rootSaga() {
  yield all([
    fork(buyDomainWatcher),
    fork(buyDomainByIdWatcher),
  ]);
}