//constants
import { contactUsTypes } from 'appRedux/constants/ActionTypes';

export const sendContactUs = (payload) => ({
  type: contactUsTypes.SEND_CONTACT_US,
  payload,
});

export const sendContactUsSuccess = () => ({
  type: contactUsTypes.SEND_CONTACT_US_SUCCESS,
});

export const sendContactUsFailed = () => ({
  type: contactUsTypes.SEND_CONTACT_US_FAILED,
});