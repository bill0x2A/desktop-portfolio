import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer';

const debug = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, debug);

ReactDOM.render(
  <Provider store ={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

