import { takeEvery, put, call } from 'redux-saga/effects';
import { 
	SEND_REGISTER_DATA, 
	GET_USER_DATA,
	SEND_LOGIN_DATA, 
	putAuthData, 
	putUserData,
	putFailedAuthData 
} from './actions';

import { addNotify } from '../../store/notify/actions';
import * as config from '../config';
import fetchWithAuth from '../fetchWithAuth';

// Workers
function* workerRegisterData(action) {
	
	const response = yield fetchWithAuth(config.URL_REGISTER_API, 'POST', action.payload);

	if (response && response.success === true) 	
		yield put(putAuthData(response));
	else 
		yield put(putFailedAuthData(response));
}

function* workerLoginData(action) {
	const newData = {
		username: action.payload.email,
		password: action.payload.password,
		grant_type: 'password',
		client_id: config.CLIENT_ID,
		client_secret: config.CLIENT_SECRET
	}

	const respnse = yield fetchWithAuth(config.URL_LOGIN_API, 'POST', newData);
	
	if (respnse) 	
		yield put(putAuthData(respnse));
	else 
		yield put(putFailedAuthData(respnse));
}

function* workerGetUserData(action) {
	
	const response = yield fetchWithAuth(config.URL_USER_API);

	if (response) 	
		yield put(putUserData(response));
	else 
		addNotify({message: 'Ошибка - данные пользователя не получены'});
}


// Wathcers
export function* watchRegisterData() {
	yield takeEvery(SEND_REGISTER_DATA, workerRegisterData);
}

export function* watchLoginData() {
	yield takeEvery(SEND_LOGIN_DATA, workerLoginData);
}

export function* watchGetUserData() {
	yield takeEvery(GET_USER_DATA, workerGetUserData);
}
