export const base_url = 'https://traderlo-portal-api.herokuapp.com/traderlo/v1';
export const login_url = 'https://traderlo-portal-api.herokuapp.com/traderlo';
export const loginHeaders = {
  // 'Content-Type': '',
  Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk' //TODO: to change
};
export const headers = {
  'content-type': 'application/json',
  Accept: 'application/json',
  uid: '1',
  authorization: `Bearer ${window.localStorage.getItem('access_token')}`
};