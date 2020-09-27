import { authReducer } from './auth/reducers';
import { notifyReducer } from './notify/reducers';
import { modalReducer } from './modal/reducers';
import { projectsReduser } from './projects/reducers';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  notify: notifyReducer,
  modal: modalReducer,
  projects: projectsReduser,
});
