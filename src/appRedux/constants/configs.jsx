export const base_url = 'https://traderlo-portal-api.herokuapp.com/traderlo/v1';
export const login_url = 'https://traderlo-portal-api.herokuapp.com/traderlo';
export const loginHeaders = {
  // 'Content-Type': '',
};
export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  uid: '1',
  authorization: `Bearer ${window.localStorage.getItem('access_token')}`
};