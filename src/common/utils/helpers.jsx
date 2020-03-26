import { notification  } from 'antd';

const handleResponse = (resp) => {   // if empty return {}
  if (resp.ok) {
    return resp.text().then(function(respText) {
      return respText ? JSON.parse(respText) : {}
    })
  }
  throw Error(resp.statusMessage);
}

export const request = {
  post: async (url, params) => {
    return await fetch(url, {method: 'POST', ...params}).then(handleResponse);
  },
  get: async (url, params) => {
    return await fetch(url, {method: 'GET', ...params}).then(handleResponse);
  },
  delete: async (url, params) => {
    return await fetch(url, {method: 'DELETE', ...params}).then(handleResponse);
  },
}

export const objToFormData = (obj) => {
  const objKeys = Object.keys(obj);
  var formData = new FormData();

  objKeys.map(key => {
    formData.append(key, obj[key]);
    return 0;
  });
  return formData;
}

export const getAccessToken = () => window.localStorage.getItem('access_token');

export const openNotification = ({status, message , description}) => {
  return notification[status]({
    message: message,
    description: description,
    placement: 'bottomRight',
  });
};