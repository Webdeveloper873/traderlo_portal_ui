import { buyDomainTypes, bidDomainTypes } from 'appRedux/constants/ActionTypes';

const intialState = {
  domainInfo: null,
  domainList: [],
  selectedDomainInfo: {},
  alreadyInWatchList:false, // for UI temporary
};

export default (state = intialState, action) => {
  const { type, payload } = action || {};
  const { selectedDomainInfo } = state || {};
  console.log(payload,'payload reducer');
  switch (type) {
    case buyDomainTypes.GET_BUY_DOMAIN_SUCCESS:
      //const {id} = payload || {};
      return { ...state, domainList: payload };
    case buyDomainTypes.GET_BUY_DOMAIN_BY_ID_SUCCESS:
      return { ...state, domainInfo: payload };
    case buyDomainTypes.STORE_SELECTED_DOMAIN:
      return { ...state, selectedDomainInfo: payload };
      case buyDomainTypes.ADD_TO_WATCHLIST_SUCCESS:
        return { ...state, alreadyInWatchList: true };
    case bidDomainTypes.SET_BID_SUCCESS:
      const { amount } = payload || {};
      return { ...state, selectedDomainInfo: { ...selectedDomainInfo, startingPrice: amount } };
    default:
      return state;
  }
}