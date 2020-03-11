import { userActTypes } from 'appRedux/constants/ActionTypes';
import { routes } from 'common/constants';

const intialState = {
  isLoggedIn: false,
  token: {},
  profile: {},
};

export default (state = intialState, action) => {
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
    case userActTypes.FETCH_PROFILE_SUCCESS:
      return { ...state, profile };
    case userActTypes.LOGOUT_SUCCESS:
      window.localStorage.clear();
      window.location.reload();
      return { ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}