import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchRegisterData, watchLoginData, watchGetUserData} from './auth/sagas';
import {
  watchGetProjects, 
  watchGetOtherProjects,
  watchCreateProjects, 
  watchUpdateProjects, 
  watchDeleteProjects, 
  watchAddUserInProject, 
  watchDeleteUserInProject,
  watchGetProjectById,
  watchGetSnippets, 
  watchCreateSnippet, 
  watchUpdateSnippet,
  watchGetComponents, 
  wathcCreateComponent, 
  wathcDeletedComponent
} from './projects/sagas';
// import {} from './components/sagas';
import reducers from './redusers';
import logger from 'redux-logger';



const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('app_state');

      if (!serialisedState) return {}; // todo: допилить

      return JSON.parse(serialisedState);
  } catch (err) {
      return undefined;
  }
};

const saveState = (state) => {
  try {
      const serialisedState = JSON.stringify(state);

      window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
    
  }
};

const sagaMiddleware = createSagaMiddleware();
const oldState = loadState();
const store = createStore(reducers, oldState, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchRegisterData);
sagaMiddleware.run(watchLoginData);
sagaMiddleware.run(watchGetProjects);
sagaMiddleware.run(watchCreateProjects);
sagaMiddleware.run(watchUpdateProjects);
sagaMiddleware.run(watchDeleteProjects);
sagaMiddleware.run(watchAddUserInProject);
sagaMiddleware.run(watchDeleteUserInProject);
sagaMiddleware.run(watchGetOtherProjects);
sagaMiddleware.run(watchGetUserData);
sagaMiddleware.run(watchGetComponents);
sagaMiddleware.run(wathcCreateComponent);
sagaMiddleware.run(watchGetProjectById);
sagaMiddleware.run(watchGetSnippets);
sagaMiddleware.run(watchCreateSnippet);
sagaMiddleware.run(watchUpdateSnippet);
sagaMiddleware.run(wathcDeletedComponent);
  
store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    // projects: store.getState().projects
  });
});


export default store;