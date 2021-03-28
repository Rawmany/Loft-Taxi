import {takeEvery, call, put} from 'redux-saga/effects';
import {logIn} from '../actions/authActions';
import {register} from '../actions/registerAction';
import {serverRegister} from '../api';

export function* registerSaga(action) {
	const data = action.payload;
	const result = yield call(serverRegister, data)
	if(result.success) {
		localStorage.isLoggedIn = true;
		yield put(logIn(result.token))
	}
}

export function* registrationSaga() {
	yield takeEvery(register, registerSaga);
}