export const request = async (url, params) => {
  const response = await fetch(url, params).then(resp => resp.json());
  console.log('api response', response);
  return response;
}