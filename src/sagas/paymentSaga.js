import {takeEvery, call, put, select} from 'redux-saga/effects';
import {sendCard, addCard, getCardRequest, getCardSuccess} from '../actions/cardActions';
import {serverAddCard, serverGetCard} from '../api';

export function* sendCardSaga(action) {
	const data = action.payload;
	const result = yield call(serverAddCard, data)
	if(result.success) {		
		yield put(addCard())
	}
}

export function* getCardSaga(action) {
	const token = yield select(state => state.auth.token);
	const result = yield call(serverGetCard, token)
	if(result) {
		yield put(getCardSuccess(result))
	}
}

export function* paymentSaga() {
	yield takeEvery(sendCard, sendCardSaga);
	yield takeEvery(getCardRequest, getCardSaga);
}