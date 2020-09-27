import React from 'react';

import { Provider } from 'react-redux';
import store from "./store/index";

import './main.sass';

import {  
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ModalContainer from './containers/ModalContainer';
import PrivateRoute from './routs/PrivateRoute';
import HomeContainer from './containers/HomeContainer';
import AuthContainer from './containers/AuthContainer';
import NotifyListContainer from './containers/NotifyListContainer';




function App (props) {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          
          <Route path="/auth">
            <AuthContainer />
          </Route> 

          <PrivateRoute store={store} path='/' component={HomeContainer} />
          
          
        </Switch>
      </Router>
      
      <ModalContainer />
      <NotifyListContainer />
    </Provider>    
  );
  
}


export default App;
