import {takeEvery, call, put} from 'redux-saga/effects';
import {sendCard, getCard, addCard} from '../actions/cardActions';
import {serverAddCard, serverGetCard} from '../api';

export function* sendCardSaga(action) {
	const {cardNumber, expiryDate, cardName, cvc} = action.payload;
	const result = yield call(serverAddCard, cardNumber, expiryDate, cardName, cvc)
	if(result) {
		localStorage.cardNumber = cardNumber;
		localStorage.expiryDate = expiryDate;
		localStorage.cardName = cardName;
		localStorage.cvc = cvc;
		localStorage.hasCard = true;
		yield put(addCard(cardNumber, expiryDate, cardName, cvc))
	}
}

export function* getCardSaga(action) {
	const result = yield call(serverGetCard)
	if(result) {
		const {cardNumber, expiryDate, cardName, cvc} = localStorage;
		yield put(addCard(cardNumber, expiryDate, cardName, cvc))
	}
}

export function* paymentSaga() {
	yield takeEvery(sendCard, sendCardSaga);
	yield takeEvery(getCard, getCardSaga);
}