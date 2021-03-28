import {createAction} from 'redux-actions';

export const addCard = createAction(
	"ADD_CARD",
	(cardNumber, expiryDate, cardName, cvc) => ({cardNumber, expiryDate, cardName, cvc})
);

export const sendCard = createAction(
	"SEND_CARD",
	(cardNumber, expiryDate, cardName, cvc) => ({cardNumber, expiryDate, cardName, cvc})
);

export const getCardRequest = createAction("GET_CARD_REQUEST");
export const getCardSuccess = createAction("GET_CARD_SUCCESS");
export const getCardFailure = createAction("GET_CARD_FAILURE");