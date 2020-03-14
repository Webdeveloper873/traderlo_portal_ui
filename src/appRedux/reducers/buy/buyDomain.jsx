import { buyDomainTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  domainInfo: null,
  domainList: [],
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  console.log(payload,'payload reducer');
  switch (type) {
    case buyDomainTypes.GET_BUY_DOMAIN_SUCCESS:
      //const {id} = payload || {};
      return { ...state, domainList: payload };
    
      case buyDomainTypes.GET_BUY_DOMAIN_BY_ID_SUCCESS:
        return { ...state, domainInfo: payload };
    default:
      return state;
  }
}