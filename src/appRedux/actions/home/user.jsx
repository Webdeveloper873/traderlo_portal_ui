import { userActTypes } from 'appRedux/constants/ActionTypes';

export const login = ({username, password}) => ({
  type: userActTypes.LOGIN,
  payload: {
    grant_type: 'password',
    scope: 'any',
    username,
    password,
  },
});

export const successLogin = (token) => ({
  type: userActTypes.LOGIN_SUCCESS,
  payload: { token }
});

export const failedLogin = () => ({
  type: userActTypes.LOGIN_FAILED
});

export const getUserProfile = (id) => ({
  type: userActTypes.FETCH_PROFILE,
})

export const getProfileSuccess = (profile) => ({
  type: userActTypes.FETCH_PROFILE_SUCCESS,
  payload: { profile }
})

export const registerUser = (profile) => (
  {
  type: userActTypes.REGISTER_USER,
  payload: { profile }
})

export const registerUserSuccess = (profile) => ({
  type: userActTypes.REGISTER_USER_SUCCESS,
  payload: { profile }
});

export const logout = () => ({
  type: userActTypes.LOGOUT,
  payload: {
    accessToken: window.localStorage.getItem('access_token')
  }
});

export const successLogout = () => ({
  type: userActTypes.LOGOUT_SUCCESS
});

export const getSavedBanks = () => ({
  type: userActTypes.GET_SAVED_BANKS
});

export const getSavedBanksSuccess = (payload) => ({
  type: userActTypes.GET_SAVED_BANKS_SUCCESS,
  payload
});

export const getSavedCard = () => ({
  type: userActTypes.GET_SAVED_CARDS
});

export const getSavedCardSuccess = (payload) => ({
  type: userActTypes.GET_SAVED_CARDS_SUCCESS,
  payload
});

export const resetUserState = () => ({
  type: userActTypes.RESET
});