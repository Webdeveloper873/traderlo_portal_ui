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

export const request = {
  post: async (url, params) => {
    return await fetch(url, {method: 'POST', ...params}).then(handleError);
  },
  get: async (url, params) => {
    return await fetch(url, {method: 'GET', ...params}).then(handleError);
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