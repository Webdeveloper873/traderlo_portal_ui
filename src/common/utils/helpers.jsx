// export const request = async (url, params) => {
//   const response = await fetch(url, params).then(resp => resp.json());
//   console.log('api response', response);
//   return response;
// }

const handleError = (resp) => {
  if(resp.ok){
    return resp.json();
  }
  throw Error(resp.statusMessage);
}
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
  });
  return formData;
}