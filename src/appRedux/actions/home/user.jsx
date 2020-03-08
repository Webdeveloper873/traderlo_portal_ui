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