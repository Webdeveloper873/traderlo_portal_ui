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
})

export const getUserProfile = (id) => ({
  type: userActTypes.FETCH_PROFILE,
  payload: {
    id : 1 //TODO: change this one
  }
})

export const getProfileSuccess = (profile) => ({
  type: userActTypes.FETCH_PROFILE_SUCCESS,
  payload: { profile }
})

export const logout = () => ({
  type: userActTypes.LOGOUT,
});

export const successLogout = () => ({
  type: userActTypes.LOGOUT_SUCCESS
})