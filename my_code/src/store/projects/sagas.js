import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_USER_PROJECTS,
  GET_PROJECT_BY_ID,
  GET_OTHER_PROJECTS,
  CREATE_USER_PROJECT,
  UPDATE_USER_PROJECT,
  DELETE_USER_PROJECT,
  ADD_USER_IN_PROJECT,
  DELETE_USER_IN_PROJECT,
  GET_SNIPPETS,
  CREATE_SNIPPETS,
  GET_COMPONENTS,
  UPDATE_SNIPPETS,
  CREATE_COMPONENT, 
  DELETE_COMPONENT,
  
  putDeletedUserProject,
  putGottenProjectById,
  putGottenUserProjects,
  putGottenOtherProjects,
  putCreatedUserProject,
  putUpdatedUserProject,
  putAddedUserInProject,
  putDeletedUserInProject,
  putCreatedSnippets,
  putGottenSnippets,
  putAddedComponenInProject, 
  putDeletedComponenInProject,
  putGottenComponents,
} from './actions';

import fetchWithAuth from '../fetchWithAuth';
import * as config from '../config';
import { addNotify } from '../notify/actions';
import store from '../index';

// Workers

function* workerGetProjects(action) {
  
	const response = yield fetchWithAuth(config.URL_PROJECT_API);
  
	if (response && response.success === true) 	
    yield put(putGottenUserProjects(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerGetProjectById(action) {
  
	const response = yield fetchWithAuth(`${config.URL_PROJECT_API}/${action.payload}`);
  
	if (response && response.success === true) 	
    yield put(putGottenProjectById(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerGetOtherProjects(action) {
  
	const response = yield fetchWithAuth(`${config.URL_PROJECT_API}/other`);
  
	if (response && response.success === true) 	
    yield put(putGottenOtherProjects(response, store.getState().auth.user.id));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerCreateProjects(action) {
  
	const response = yield fetchWithAuth(config.URL_PROJECT_API, 'POST', action.payload);;
  
	if (response && response.success === true) 	
    yield put(putCreatedUserProject(response.data));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerUpdateProjects(action) {
  
	const response = yield fetchWithAuth(`${config.URL_PROJECT_API}/${action.payload.id}`, 'PUT', action.payload);
  
	if (response && response.success === true) 	
    yield put(putUpdatedUserProject(response.data));
  else 
    yield put(addNotify({message: response.message}));
}


function* workerDeleteProjects(action) {
  
	const response = yield fetchWithAuth(`${config.URL_PROJECT_API}/${action.payload}`, 'DELETE');
  
	if (response && response.success === true) 	
    yield put(putDeletedUserProject(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerAddUserInProject(action) {
  const response = yield fetchWithAuth(`${config.URL_PROJECT_API}/users`, 'POST', action.payload);
  
	if (response && response.success === true) 	
    yield put(putAddedUserInProject(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerDeleteUserInProject(action) {
  const url = `${config.URL_PROJECT_API}/users/${action.payload.userId}_${action.payload.projectId}`;
  const response = yield fetchWithAuth(url, 'DELETE');

	if (response && response.success === true) 	
    yield put(putDeletedUserInProject(response));
  else 
    yield put(addNotify({message: response.message}));
}


// Snippets
function* workerGetSnippets(action) {
  
	const response = yield fetchWithAuth(`${config.URL_SNIPPET_API}/component${action.payload}`);

	if (response && response.success === true) 
    yield put(putGottenSnippets(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerCreateSnippet(action) {
  
	const response = yield fetchWithAuth(`${config.URL_SNIPPET_API}`, 'POST', action.payload);

	if (response && response.success === true) 
    yield put(putCreatedSnippets(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerUpdateSnippet(action) {
  
	const response = yield fetchWithAuth(`${config.URL_SNIPPET_API}/${action.payload.snippetId}`, 'PUT', action.payload.data);
  console.log(response, 'ответ');
	if (response && response.success === true) 
    yield put(addNotify({message: 'Сниппет сохранен'}));
  else 
    yield put(addNotify({message: 'Возникла ошибка на сервере'}));
}

function* workerGetComponents(action) {
  
	const response = yield fetchWithAuth(`${config.URL_COMPONENT_API}/project${action.payload}`);

	if (response && response.success === true) {
    yield put(putGottenComponents(response));
  }
    
  else 
    yield put(addNotify({message: response.message}));
}

function* workerCreateComponent(action) {
  
	const response = yield fetchWithAuth(config.URL_COMPONENT_API, 'POST', action.payload);

	if (response && response.success === true) 	
    yield put(putAddedComponenInProject(response));
  else 
    yield put(addNotify({message: response.message}));
}

function* workerDeleteComponent(action) {
  
	const response = yield fetchWithAuth(`${config.URL_COMPONENT_API}/${action.payload}`, 'DELETE');
  console.log(response)
	if (response && response.success === true) 	
    yield put(putDeletedComponenInProject(response));
  else 
    yield put(addNotify({message: 'Возникла ошибка на сервере'}));
}
// Watchers 

export function* watchGetProjects() {
  yield takeEvery(GET_USER_PROJECTS, workerGetProjects);
}

export function* watchGetProjectById() {
  yield takeEvery(GET_PROJECT_BY_ID, workerGetProjectById);
}

export function* watchGetOtherProjects() {
  yield takeEvery(GET_OTHER_PROJECTS, workerGetOtherProjects);
}

export function* watchCreateProjects() {
  yield takeEvery(CREATE_USER_PROJECT, workerCreateProjects);
}

export function* watchUpdateProjects() {
  yield takeEvery(UPDATE_USER_PROJECT, workerUpdateProjects);
}

export function* watchDeleteProjects() {
  yield takeEvery(DELETE_USER_PROJECT, workerDeleteProjects);
}

export function* watchAddUserInProject() {
  yield takeEvery(ADD_USER_IN_PROJECT, workerAddUserInProject);
}

export function* watchDeleteUserInProject() {
  yield takeEvery(DELETE_USER_IN_PROJECT, workerDeleteUserInProject);
}

export function* watchGetSnippets() {
  yield takeEvery(GET_SNIPPETS, workerGetSnippets);
}

export function* watchCreateSnippet() {
  yield takeEvery(CREATE_SNIPPETS, workerCreateSnippet);
}

export function* watchUpdateSnippet() {
  yield takeEvery(UPDATE_SNIPPETS, workerUpdateSnippet);
}

export function* watchGetComponents() {
  yield takeEvery(GET_COMPONENTS, workerGetComponents);
}

export function* wathcCreateComponent() {
  yield takeEvery(CREATE_COMPONENT, workerCreateComponent);
}

export function* wathcDeletedComponent() {
  yield takeEvery(DELETE_COMPONENT, workerDeleteComponent);
}


