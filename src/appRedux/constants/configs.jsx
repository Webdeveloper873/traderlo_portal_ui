export const base_url = 'https://traderlo-portal-api.herokuapp.com/traderlo/v1';
export const no_version_base_url = 'https://traderlo-portal-api.herokuapp.com/traderlo';
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

export const noAuthHeaders = {
  'content-type': 'application/json',
  Accept: 'application/json',
  uid: '1',
}