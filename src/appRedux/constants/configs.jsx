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

export const testeHeaders = {
  //'content-type': 'application/json',
  Accept: 'application/json',
  uid: '1',
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH',
  // 'Access-Control-Allow-Credentials': 'true',
  // 'Access-Control-Allow-Headers': "x-requested-with, Content-Type, origin, authorization, accept, client-security-token"
}

export const sampleBody = {
  vo: {
    "aboutMe": "string",
    "address": "string",
    "associatedAccount": "string",
    "birthDate": "2020-03-10T10:16:34.001Z",
    "buyerCertificate": "y",
    "cardName": 0,
    "contactNo": "string",
    "createdDate": "2020-03-10T10:16:34.001Z",
    "description": "string",
    "email": "string",
    "emailVerificationStatus": "y",
    "facebookUserProfile": "string",
    "facebookVerificationStatus": "y",
    "firstName": "string",
    "gender": "m",
    "homePageUrl": "string",
    "id": 0,
    "identifier": "string",
    "ipAddress": "string",
    "isActive": "y",
    "isDeleted": "y",
    "isFacebookDisplayed": "y",
    "isLinkedInDisplayed": "y",
    "isPaypalVerified": "y",
    "isSubscribed": "y",
    "isTwitterDisplayed": "y",
    "lastLoginDate": "2020-03-10T10:16:34.002Z",
    "lastName": "string",
    "linkedInUserProfile": "string",
    "linkedInVerificationStatus": "y",
    "location": "string",
    "password": "string",
    "paypalAccount": "string",
    "phoneVerificationStatus": "y",
    "phoneVerifyCode": "string",
    "phoneVerifyTimes": 0,
    "profileImage": "string",
    "publicProfileUrl": "string",
    "status": "a",
    "token": "string",
    "twitterUserProfile": "string",
    "twitterVerificationStatus": "y",
    "userName": "string",
    "walletAmount": 0,
    "webUrl": "string"
  }
}