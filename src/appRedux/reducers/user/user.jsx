import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  loginFailed: false,
  token: {},
  profile: {},
  savedBanks: [],
  savedCards: [],
  register: null,
  activeSidebarKey: '',
  updateUserSuccess:false,
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  const { profile, token } = payload || {};
  switch (type) {
    case userActTypes.LOGIN_SUCCESS:
      const { access_token, refresh_token } = token || {};
      window.localStorage.setItem('access_token', access_token);
     // window.location.reload();
      return { ...state,
        isLoggedIn: true,
        accessToken: access_token,
        refreshToken: refresh_token
      };
    case userActTypes.LOGIN_FAILED:
      return { ...state, loginFailed: true };
    case userActTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, profile, loginFailed: false };
      case userActTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, profile, updateUserSuccess: true }; 
    case userActTypes.REGISTER_USER_SUCCESS:
      return {...initialState, register: true};
    case userActTypes.REGISTER_USER_FAILED:
      return {...initialState, register: false};
    case userActTypes.LOGOUT_SUCCESS:
      window.localStorage.clear();
      window.location.reload();
      return initialState;
    case userActTypes.GET_SAVED_BANKS_SUCCESS:
      return { ...state, savedBanks: payload };
    case userActTypes.GET_SAVED_CARDS_SUCCESS:
      return { ...state, savedCards: payload };
    case userActTypes.RESET:
      return initialState;
    case userActTypes.CHANGE_SIDEBAR_ACTIVE_KEY:
      return { ...state, activeSidebarKey: payload };
    case userActTypes.CLEAR_USER_NOTIF_STATUS:
      return {...state, updateUserSuccess: false}
    default:
      return state;
  }
}