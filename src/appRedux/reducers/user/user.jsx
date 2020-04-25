import { userActTypes } from 'appRedux/constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  loginSuccess: false,
  loginFailed: false,
  loginViaGoogleFailed: false,
  token: {},
  profile: {},
  savedBanks: [],
  savedCards: [],
  register: null,
  activeSidebarKey: '',
  updateUserSuccess:false,
  changePasswordSuccess: false,
  googleToken :null,
};

export default (state = initialState, action) => {
  const { type, payload } = action || {};
  const { profile, token, googleToken } = payload || {};
  switch (type) {
    case userActTypes.LOGIN_SUCCESS:
      console.log(token,'tokentoken')
      const { accessToken, refresh_token } = token || {};
      console.log()
      window.localStorage.setItem('access_token', accessToken);
     // window.location.reload();
      return { ...state,
        isLoggedIn: true,
        loginSuccess: true,
        accessToken: accessToken,
        refreshToken: refresh_token
      };
    case userActTypes.LOGIN_VIA_GOOGLE_SUCCESS:
      window.localStorage.setItem('access_token', googleToken);
      return { ...state,
        isLoggedIn: true,
        loginSuccess: true,
        googleToken: googleToken,
      };
    case userActTypes.LOGIN_FAILED:
      return { ...state, loginFailed: true };
    case userActTypes.LOGIN_VIA_GOOGLE_FAILED:
      return { ...state, loginViaGoogleFailed: true };
    case userActTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, profile, loginFailed: false };
    case userActTypes.UPDATE_PROFILE_SUCCESS:
      return { ...state, profile, updateUserSuccess: true };
    case userActTypes.CHANGE_PASSWORD_SUCCESS:
      return { ...state, changePasswordSuccess: true };
    case userActTypes.REGISTER_USER_SUCCESS:
      return {...initialState, register: true};
    case userActTypes.REGISTER_USER_FAILED:
      return {...initialState, register: false};
    case userActTypes.LOGOUT_SUCCESS:
      window.localStorage.clear();
      window.location.pathname = '/';
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
      return {
        ...state,
        updateUserSuccess: false,
        changePasswordSuccess: false,
        loginSuccess: false,
        loginViaGoogleFailed: false}
    default:
      return state;
  }
}