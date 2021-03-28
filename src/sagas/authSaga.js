import {takeEvery, call, put} from 'redux-saga/effects';
import {authenticate, logIn} from '../actions/authActions';
import {serverLogin} from '../api';

export function* authenticateSaga(action) {	
	const result = yield call(serverLogin, action.payload);
	cons
	if(result.success) {
		localStorage.isLoggedIn = true;
		yield put(logIn(result.token))
	}
}

export function* authSaga() {
	yield takeEvery(authenticate, authenticateSaga);
}