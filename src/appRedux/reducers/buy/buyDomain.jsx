import { buyDomainTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  domainInfo: null,
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case buyDomainTypes.GET_BUY_DOMAIN_SUCCESS:
      //const {id} = payload || {};
      console.log(payload,' domain success fetch')
      return { ...state, domainList: payload };
    
      case buyDomainTypes.GET_BUY_DOMAIN_BY_ID_SUCCESS:
        return { ...state, domainInfo: payload };
    default:
      return state;
  }
}