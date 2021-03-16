export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = "AUTHENTICATE";
export const SAVE_CARD_REQUEST = 'SAVE_CARD_REQUEST';
export const SAVE_CARD_SUCCESS = 'SAVE_CARD_SUCCESS';
export const SAVE_CARD_ERROR = 'SAVE_CARD_ERROR';

export const logIn = (token) => ({ type: LOG_IN, payload: token });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const saveCardRequest = (cardData) => ({type: SAVE_CARD_REQUEST, payload: cardData});
export const saveCardSuccess = (flag) => ({type: SAVE_CARD_SUCCESS, payload: flag });
export const saveCardError = (error) => ({type: SAVE_CARD_ERROR, payload: error });