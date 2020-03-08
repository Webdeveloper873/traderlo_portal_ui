// export const request = async (url, params) => {
//   const response = await fetch(url, params).then(resp => resp.json());
//   console.log('api response', response);
//   return response;
// }

export const request = {
  post: async (url, params) => {
    return await fetch(url, {method: 'POST', ...params}).then(resp => resp.json());
  },
  get: async (url, params) => {
    console.log('url:', url);
    console.log('params:', params);
    return await fetch(url, {method: 'GET', ...params}).then(resp => resp.json());
  },
}