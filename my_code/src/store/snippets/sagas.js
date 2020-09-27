// import {takeEvery, put, call} from 'redux-saga/effects';
// import {
//   GET_SNIPPETS,
//   CREATE_SNIPPETS,
//   putCreatedSnippets,
//   putGottenSnippets,
//   putUpdatedSnippet,
//   UPDATE_SNIPPETS
// } from './actions';


// import fetchWithAuth from '../fetchWithAuth';
// import * as config from '../config';
// import { addNotify } from '../notify/actions';

// // Workers

// function* workerGetSnippets(action) {
  
// 	const response = yield fetchWithAuth(`${config.URL_SNIPPET_API}/component${action.payload}`);

// 	if (response && response.success === true) 
//     yield put(putGottenSnippets(response));
//   else 
//     yield put(addNotify({message: response.message}));
// }

// function* workerCreateSnippet(action) {
  
// 	const response = yield fetchWithAuth(`${config.URL_SNIPPET_API}`, 'POST', action.payload);

// 	if (response && response.success === true) 
//     yield put(putCreatedSnippets(response));
//   else 
//     yield put(addNotify({message: response.message}));
// }

// function* workerUpdateSnippet(action) {
  
// 	const response = yield fetchWithAuth(`${config.URL_SNIPPET_API}/${action.payload.snippetId}`, 'PUT', action.payload.data);
//   console.log(response, 'ответ');
// 	if (response && response.success === true) 
//     yield put(addNotify({message: 'Сниппет сохранен'}));
//   else 
//     yield put(addNotify({message: 'Возникла ошибка на сервере'}));
// }


// // Watchers 

// export function* watchGetSnippets() {
//   yield takeEvery(GET_SNIPPETS, workerGetSnippets);
// }

// export function* watchCreateSnippet() {
//   yield takeEvery(CREATE_SNIPPETS, workerCreateSnippet);
// }

// export function* watchUpdateSnippet() {
//   yield takeEvery(UPDATE_SNIPPETS, workerUpdateSnippet);
// }




