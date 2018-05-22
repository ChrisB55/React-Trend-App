import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import MainView from './components/MainView';
import error404 from './components/error404';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, BrowserRouter, Route, hashHistory}  from 'react-router-dom';

ReactDOM.render(
  
  <BrowserRouter history = {hashHistory}>
    <Switch>
      <Route path="/" component= {App}/>
      <Route path="*" component={error404} />
      </Switch>
  </BrowserRouter>,
  
  document.getElementById('root'));
registerServiceWorker();
