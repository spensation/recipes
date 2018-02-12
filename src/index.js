import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>),
  document.getElementById('root'));
registerServiceWorker();
